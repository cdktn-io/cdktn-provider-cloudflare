# `dataCloudflareCertificateAuthoritiesHostnameAssociations` Submodule <a name="`dataCloudflareCertificateAuthoritiesHostnameAssociations` Submodule" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareCertificateAuthoritiesHostnameAssociations <a name="DataCloudflareCertificateAuthoritiesHostnameAssociations" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/data-sources/certificate_authorities_hostname_associations cloudflare_certificate_authorities_hostname_associations}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_certificate_authorities_hostname_associations.DataCloudflareCertificateAuthoritiesHostnameAssociations;

DataCloudflareCertificateAuthoritiesHostnameAssociations.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .mtlsCertificateId(java.lang.String)
//  .zoneId(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.Initializer.parameter.mtlsCertificateId">mtlsCertificateId</a></code> | <code>java.lang.String</code> | The UUID to match against for a certificate that was uploaded to the mTLS Certificate Management endpoint. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.Initializer.parameter.zoneId">zoneId</a></code> | <code>java.lang.String</code> | Identifier. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `mtlsCertificateId`<sup>Optional</sup> <a name="mtlsCertificateId" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.Initializer.parameter.mtlsCertificateId"></a>

- *Type:* java.lang.String

The UUID to match against for a certificate that was uploaded to the mTLS Certificate Management endpoint.

If no mtls_certificate_id is given, the results will be the hostnames associated to your active Cloudflare Managed CA.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/data-sources/certificate_authorities_hostname_associations#mtls_certificate_id DataCloudflareCertificateAuthoritiesHostnameAssociations#mtls_certificate_id}

---

##### `zoneId`<sup>Optional</sup> <a name="zoneId" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.Initializer.parameter.zoneId"></a>

- *Type:* java.lang.String

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/data-sources/certificate_authorities_hostname_associations#zone_id DataCloudflareCertificateAuthoritiesHostnameAssociations#zone_id}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.resetMtlsCertificateId">resetMtlsCertificateId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.resetZoneId">resetZoneId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetMtlsCertificateId` <a name="resetMtlsCertificateId" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.resetMtlsCertificateId"></a>

```java
public void resetMtlsCertificateId()
```

##### `resetZoneId` <a name="resetZoneId" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.resetZoneId"></a>

```java
public void resetZoneId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataCloudflareCertificateAuthoritiesHostnameAssociations resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.isConstruct"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_certificate_authorities_hostname_associations.DataCloudflareCertificateAuthoritiesHostnameAssociations;

DataCloudflareCertificateAuthoritiesHostnameAssociations.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.isTerraformElement"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_certificate_authorities_hostname_associations.DataCloudflareCertificateAuthoritiesHostnameAssociations;

DataCloudflareCertificateAuthoritiesHostnameAssociations.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.isTerraformDataSource"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_certificate_authorities_hostname_associations.DataCloudflareCertificateAuthoritiesHostnameAssociations;

DataCloudflareCertificateAuthoritiesHostnameAssociations.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.generateConfigForImport"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_certificate_authorities_hostname_associations.DataCloudflareCertificateAuthoritiesHostnameAssociations;

DataCloudflareCertificateAuthoritiesHostnameAssociations.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataCloudflareCertificateAuthoritiesHostnameAssociations.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataCloudflareCertificateAuthoritiesHostnameAssociations resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataCloudflareCertificateAuthoritiesHostnameAssociations to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataCloudflareCertificateAuthoritiesHostnameAssociations that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/data-sources/certificate_authorities_hostname_associations#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataCloudflareCertificateAuthoritiesHostnameAssociations to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.property.hostnames">hostnames</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.property.mtlsCertificateIdInput">mtlsCertificateIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.property.zoneIdInput">zoneIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.property.mtlsCertificateId">mtlsCertificateId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.property.zoneId">zoneId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `hostnames`<sup>Required</sup> <a name="hostnames" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.property.hostnames"></a>

```java
public java.util.List<java.lang.String> getHostnames();
```

- *Type:* java.util.List<java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `mtlsCertificateIdInput`<sup>Optional</sup> <a name="mtlsCertificateIdInput" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.property.mtlsCertificateIdInput"></a>

```java
public java.lang.String getMtlsCertificateIdInput();
```

- *Type:* java.lang.String

---

##### `zoneIdInput`<sup>Optional</sup> <a name="zoneIdInput" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.property.zoneIdInput"></a>

```java
public java.lang.String getZoneIdInput();
```

- *Type:* java.lang.String

---

##### `mtlsCertificateId`<sup>Required</sup> <a name="mtlsCertificateId" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.property.mtlsCertificateId"></a>

```java
public java.lang.String getMtlsCertificateId();
```

- *Type:* java.lang.String

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.property.zoneId"></a>

```java
public java.lang.String getZoneId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociations.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareCertificateAuthoritiesHostnameAssociationsConfig <a name="DataCloudflareCertificateAuthoritiesHostnameAssociationsConfig" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociationsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociationsConfig.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_certificate_authorities_hostname_associations.DataCloudflareCertificateAuthoritiesHostnameAssociationsConfig;

DataCloudflareCertificateAuthoritiesHostnameAssociationsConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .mtlsCertificateId(java.lang.String)
//  .zoneId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociationsConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociationsConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociationsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociationsConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociationsConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociationsConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociationsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociationsConfig.property.mtlsCertificateId">mtlsCertificateId</a></code> | <code>java.lang.String</code> | The UUID to match against for a certificate that was uploaded to the mTLS Certificate Management endpoint. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociationsConfig.property.zoneId">zoneId</a></code> | <code>java.lang.String</code> | Identifier. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociationsConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociationsConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociationsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociationsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociationsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociationsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociationsConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `mtlsCertificateId`<sup>Optional</sup> <a name="mtlsCertificateId" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociationsConfig.property.mtlsCertificateId"></a>

```java
public java.lang.String getMtlsCertificateId();
```

- *Type:* java.lang.String

The UUID to match against for a certificate that was uploaded to the mTLS Certificate Management endpoint.

If no mtls_certificate_id is given, the results will be the hostnames associated to your active Cloudflare Managed CA.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/data-sources/certificate_authorities_hostname_associations#mtls_certificate_id DataCloudflareCertificateAuthoritiesHostnameAssociations#mtls_certificate_id}

---

##### `zoneId`<sup>Optional</sup> <a name="zoneId" id="@cdktn/provider-cloudflare.dataCloudflareCertificateAuthoritiesHostnameAssociations.DataCloudflareCertificateAuthoritiesHostnameAssociationsConfig.property.zoneId"></a>

```java
public java.lang.String getZoneId();
```

- *Type:* java.lang.String

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/data-sources/certificate_authorities_hostname_associations#zone_id DataCloudflareCertificateAuthoritiesHostnameAssociations#zone_id}

---



