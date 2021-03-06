-- CRIAR HOSPITAL
CREATE TABLE TBL_HOSPITAL
	(ID NUMERIC,
		NOME VARCHAR(255),
		ENDERECO VARCHAR(255),
		BAIRRO VARCHAR(255),
		CEP VARCHAR(255),
		CNPJ VARCHAR(255),
		CIDADE VARCHAR(255),
		ESTADO VARCHAR(255),
		CONSTRAINT HOSPITAL_PK PRIMARY KEY(ID));
-- CRIAR PACIENTE
CREATE TABLE TBL_PACIENTE
	(ID NUMERIC,
		NOME_PACIENTE VARCHAR(255),
		EMAIL VARCHAR(255),
		RG VARCHAR(255),
		CPF VARCHAR(255),
		CARTAO_SUS VARCHAR(255),
		ENDERECO_PACIENTE VARCHAR(255),
		CONSTRAINT PACIENTE_PK PRIMARY KEY (ID));

CREATE TABLE TBL_USUARIOS
	(ID NUMERIC,
		PWD VARCHAR(255),
		TIPO_ACESSO VARCHAR(255),
		PACIENTE NUMERIC,
		CONSTRAINT uSUARIO_PK PRIMARY KEY (ID));

ALTER TABLE TBL_PACIENTE
	ADD CONSTRAINT CPF_UNICO
	UNIQUE (CPF);

ALTER TABLE TBL_USUARIOS
	ADD CONSTRAINT FK_USUARIOS
	FOREIGN KEY (PACIENTE)
	REFERENCES TBL_PACIENTE (ID);

