import React, { FC, useState } from "react";
import { VerificationProps } from "../components/Props";
import { VerifyDocumentRequest } from "../api";
import { Credential, CredentialEditor, CredentialForm } from "../components";
import { getConfig } from "../utils/config";
import { Title, Content, Container } from  "../utils/styles";

const CONFIG = getConfig();

export const Verify: FC<VerificationProps> = ({
  signedDocument,
  verificationResult,
  setVerificationResult,
}) => {
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (event: any) => {
    event.preventDefault();
    try {
      setLoading(true);
      const response = await VerifyDocumentRequest(
        signedDocument
      );
      const result = response.data;
      setVerificationResult(result);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <Title>Verify Credential</Title>
      <Content>
        <CredentialForm handleSubmit={handleSubmit} loading={loading} buttonText={'Verify Credential'} subtitleText={'Assertion Method'} initialValue={CONFIG.signingKeyId}/>
        <Credential
          subTitle="Signed Credential"
          value={JSON.stringify(signedDocument, null, 2)}
        />
      </Content>
      <CredentialEditor
        subTitle="Verification Result"
        value={
          verificationResult
            ? JSON.stringify(verificationResult, null, 2)
            : "{}"
        }
      />
    </Container>
  );
};
