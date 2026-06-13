# `certificateAuthoritiesHostnameAssociations` Submodule <a name="`certificateAuthoritiesHostnameAssociations` Submodule" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CertificateAuthoritiesHostnameAssociations <a name="CertificateAuthoritiesHostnameAssociations" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/certificate_authorities_hostname_associations cloudflare_certificate_authorities_hostname_associations}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.certificate_authorities_hostname_associations.CertificateAuthoritiesHostnameAssociations;

CertificateAuthoritiesHostnameAssociations.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .zoneId(java.lang.String)
//  .hostnames(java.util.List<java.lang.String>)
//  .mtlsCertificateId(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.Initializer.parameter.zoneId">zoneId</a></code> | <code>java.lang.String</code> | Identifier. |
| <code><a href="#@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.Initializer.parameter.hostnames">hostnames</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/certificate_authorities_hostname_associations#hostnames CertificateAuthoritiesHostnameAssociations#hostnames}. |
| <code><a href="#@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.Initializer.parameter.mtlsCertificateId">mtlsCertificateId</a></code> | <code>java.lang.String</code> | The UUID for a certificate that was uploaded to the mTLS Certificate Management endpoint. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.Initializer.parameter.zoneId"></a>

- *Type:* java.lang.String

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/certificate_authorities_hostname_associations#zone_id CertificateAuthoritiesHostnameAssociations#zone_id}

---

##### `hostnames`<sup>Optional</sup> <a name="hostnames" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.Initializer.parameter.hostnames"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/certificate_authorities_hostname_associations#hostnames CertificateAuthoritiesHostnameAssociations#hostnames}.

---

##### `mtlsCertificateId`<sup>Optional</sup> <a name="mtlsCertificateId" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.Initializer.parameter.mtlsCertificateId"></a>

- *Type:* java.lang.String

The UUID for a certificate that was uploaded to the mTLS Certificate Management endpoint.

If no mtls_certificate_id is given, the hostnames will be associated to your active Cloudflare Managed CA.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/certificate_authorities_hostname_associations#mtls_certificate_id CertificateAuthoritiesHostnameAssociations#mtls_certificate_id}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.resetHostnames">resetHostnames</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.resetMtlsCertificateId">resetMtlsCertificateId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetHostnames` <a name="resetHostnames" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.resetHostnames"></a>

```java
public void resetHostnames()
```

##### `resetMtlsCertificateId` <a name="resetMtlsCertificateId" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.resetMtlsCertificateId"></a>

```java
public void resetMtlsCertificateId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a CertificateAuthoritiesHostnameAssociations resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.isConstruct"></a>

```java
import io.cdktn.providers.cloudflare.certificate_authorities_hostname_associations.CertificateAuthoritiesHostnameAssociations;

CertificateAuthoritiesHostnameAssociations.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.isTerraformElement"></a>

```java
import io.cdktn.providers.cloudflare.certificate_authorities_hostname_associations.CertificateAuthoritiesHostnameAssociations;

CertificateAuthoritiesHostnameAssociations.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.isTerraformResource"></a>

```java
import io.cdktn.providers.cloudflare.certificate_authorities_hostname_associations.CertificateAuthoritiesHostnameAssociations;

CertificateAuthoritiesHostnameAssociations.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.generateConfigForImport"></a>

```java
import io.cdktn.providers.cloudflare.certificate_authorities_hostname_associations.CertificateAuthoritiesHostnameAssociations;

CertificateAuthoritiesHostnameAssociations.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),CertificateAuthoritiesHostnameAssociations.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a CertificateAuthoritiesHostnameAssociations resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the CertificateAuthoritiesHostnameAssociations to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing CertificateAuthoritiesHostnameAssociations that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/certificate_authorities_hostname_associations#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the CertificateAuthoritiesHostnameAssociations to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.property.hostnamesInput">hostnamesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.property.mtlsCertificateIdInput">mtlsCertificateIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.property.zoneIdInput">zoneIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.property.hostnames">hostnames</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.property.mtlsCertificateId">mtlsCertificateId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.property.zoneId">zoneId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `hostnamesInput`<sup>Optional</sup> <a name="hostnamesInput" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.property.hostnamesInput"></a>

```java
public java.util.List<java.lang.String> getHostnamesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `mtlsCertificateIdInput`<sup>Optional</sup> <a name="mtlsCertificateIdInput" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.property.mtlsCertificateIdInput"></a>

```java
public java.lang.String getMtlsCertificateIdInput();
```

- *Type:* java.lang.String

---

##### `zoneIdInput`<sup>Optional</sup> <a name="zoneIdInput" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.property.zoneIdInput"></a>

```java
public java.lang.String getZoneIdInput();
```

- *Type:* java.lang.String

---

##### `hostnames`<sup>Required</sup> <a name="hostnames" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.property.hostnames"></a>

```java
public java.util.List<java.lang.String> getHostnames();
```

- *Type:* java.util.List<java.lang.String>

---

##### `mtlsCertificateId`<sup>Required</sup> <a name="mtlsCertificateId" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.property.mtlsCertificateId"></a>

```java
public java.lang.String getMtlsCertificateId();
```

- *Type:* java.lang.String

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.property.zoneId"></a>

```java
public java.lang.String getZoneId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociations.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### CertificateAuthoritiesHostnameAssociationsConfig <a name="CertificateAuthoritiesHostnameAssociationsConfig" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociationsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociationsConfig.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.certificate_authorities_hostname_associations.CertificateAuthoritiesHostnameAssociationsConfig;

CertificateAuthoritiesHostnameAssociationsConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .zoneId(java.lang.String)
//  .hostnames(java.util.List<java.lang.String>)
//  .mtlsCertificateId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociationsConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociationsConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociationsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociationsConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociationsConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociationsConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociationsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociationsConfig.property.zoneId">zoneId</a></code> | <code>java.lang.String</code> | Identifier. |
| <code><a href="#@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociationsConfig.property.hostnames">hostnames</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/certificate_authorities_hostname_associations#hostnames CertificateAuthoritiesHostnameAssociations#hostnames}. |
| <code><a href="#@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociationsConfig.property.mtlsCertificateId">mtlsCertificateId</a></code> | <code>java.lang.String</code> | The UUID for a certificate that was uploaded to the mTLS Certificate Management endpoint. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociationsConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociationsConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociationsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociationsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociationsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociationsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociationsConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociationsConfig.property.zoneId"></a>

```java
public java.lang.String getZoneId();
```

- *Type:* java.lang.String

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/certificate_authorities_hostname_associations#zone_id CertificateAuthoritiesHostnameAssociations#zone_id}

---

##### `hostnames`<sup>Optional</sup> <a name="hostnames" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociationsConfig.property.hostnames"></a>

```java
public java.util.List<java.lang.String> getHostnames();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/certificate_authorities_hostname_associations#hostnames CertificateAuthoritiesHostnameAssociations#hostnames}.

---

##### `mtlsCertificateId`<sup>Optional</sup> <a name="mtlsCertificateId" id="@cdktn/provider-cloudflare.certificateAuthoritiesHostnameAssociations.CertificateAuthoritiesHostnameAssociationsConfig.property.mtlsCertificateId"></a>

```java
public java.lang.String getMtlsCertificateId();
```

- *Type:* java.lang.String

The UUID for a certificate that was uploaded to the mTLS Certificate Management endpoint.

If no mtls_certificate_id is given, the hostnames will be associated to your active Cloudflare Managed CA.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/certificate_authorities_hostname_associations#mtls_certificate_id CertificateAuthoritiesHostnameAssociations#mtls_certificate_id}

---



