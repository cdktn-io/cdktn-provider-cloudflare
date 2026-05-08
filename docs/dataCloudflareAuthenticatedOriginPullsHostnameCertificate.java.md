# `dataCloudflareAuthenticatedOriginPullsHostnameCertificate` Submodule <a name="`dataCloudflareAuthenticatedOriginPullsHostnameCertificate` Submodule" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareAuthenticatedOriginPullsHostnameCertificate <a name="DataCloudflareAuthenticatedOriginPullsHostnameCertificate" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificate"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/data-sources/authenticated_origin_pulls_hostname_certificate cloudflare_authenticated_origin_pulls_hostname_certificate}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificate.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_authenticated_origin_pulls_hostname_certificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificate;

DataCloudflareAuthenticatedOriginPullsHostnameCertificate.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .certificateId(java.lang.String)
    .zoneId(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificate.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificate.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificate.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificate.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificate.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificate.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificate.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificate.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificate.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificate.Initializer.parameter.certificateId">certificateId</a></code> | <code>java.lang.String</code> | Identifier. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificate.Initializer.parameter.zoneId">zoneId</a></code> | <code>java.lang.String</code> | Identifier. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificate.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificate.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificate.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificate.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificate.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificate.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificate.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificate.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificate.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `certificateId`<sup>Required</sup> <a name="certificateId" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificate.Initializer.parameter.certificateId"></a>

- *Type:* java.lang.String

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/data-sources/authenticated_origin_pulls_hostname_certificate#certificate_id DataCloudflareAuthenticatedOriginPullsHostnameCertificate#certificate_id}

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificate.Initializer.parameter.zoneId"></a>

- *Type:* java.lang.String

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/data-sources/authenticated_origin_pulls_hostname_certificate#zone_id DataCloudflareAuthenticatedOriginPullsHostnameCertificate#zone_id}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificate.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificate.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificate.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificate.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificate.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificate.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificate.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificate.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificate.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificate.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificate.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificate.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificate.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificate.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificate.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificate.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificate.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificate.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificate.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificate.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificate.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificate.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificate.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificate.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificate.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificate.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificate.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificate.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificate.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificate.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificate.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificate.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificate.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificate.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificate.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificate.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificate.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificate.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificate.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificate.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificate.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificate.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificate.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataCloudflareAuthenticatedOriginPullsHostnameCertificate resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificate.isConstruct"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_authenticated_origin_pulls_hostname_certificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificate;

DataCloudflareAuthenticatedOriginPullsHostnameCertificate.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificate.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificate.isTerraformElement"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_authenticated_origin_pulls_hostname_certificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificate;

DataCloudflareAuthenticatedOriginPullsHostnameCertificate.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificate.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificate.isTerraformDataSource"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_authenticated_origin_pulls_hostname_certificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificate;

DataCloudflareAuthenticatedOriginPullsHostnameCertificate.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificate.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificate.generateConfigForImport"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_authenticated_origin_pulls_hostname_certificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificate;

DataCloudflareAuthenticatedOriginPullsHostnameCertificate.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataCloudflareAuthenticatedOriginPullsHostnameCertificate.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataCloudflareAuthenticatedOriginPullsHostnameCertificate resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificate.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificate.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataCloudflareAuthenticatedOriginPullsHostnameCertificate to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataCloudflareAuthenticatedOriginPullsHostnameCertificate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/data-sources/authenticated_origin_pulls_hostname_certificate#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificate.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataCloudflareAuthenticatedOriginPullsHostnameCertificate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificate.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificate.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificate.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificate.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificate.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificate.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificate.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificate.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificate.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificate.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificate.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificate.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificate.property.certificate">certificate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificate.property.expiresOn">expiresOn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificate.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificate.property.issuer">issuer</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificate.property.serialNumber">serialNumber</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificate.property.signature">signature</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificate.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificate.property.uploadedOn">uploadedOn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificate.property.certificateIdInput">certificateIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificate.property.zoneIdInput">zoneIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificate.property.certificateId">certificateId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificate.property.zoneId">zoneId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificate.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificate.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificate.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificate.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificate.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificate.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificate.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificate.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificate.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificate.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificate.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificate.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `certificate`<sup>Required</sup> <a name="certificate" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificate.property.certificate"></a>

```java
public java.lang.String getCertificate();
```

- *Type:* java.lang.String

---

##### `expiresOn`<sup>Required</sup> <a name="expiresOn" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificate.property.expiresOn"></a>

```java
public java.lang.String getExpiresOn();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificate.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificate.property.issuer"></a>

```java
public java.lang.String getIssuer();
```

- *Type:* java.lang.String

---

##### `serialNumber`<sup>Required</sup> <a name="serialNumber" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificate.property.serialNumber"></a>

```java
public java.lang.String getSerialNumber();
```

- *Type:* java.lang.String

---

##### `signature`<sup>Required</sup> <a name="signature" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificate.property.signature"></a>

```java
public java.lang.String getSignature();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificate.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `uploadedOn`<sup>Required</sup> <a name="uploadedOn" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificate.property.uploadedOn"></a>

```java
public java.lang.String getUploadedOn();
```

- *Type:* java.lang.String

---

##### `certificateIdInput`<sup>Optional</sup> <a name="certificateIdInput" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificate.property.certificateIdInput"></a>

```java
public java.lang.String getCertificateIdInput();
```

- *Type:* java.lang.String

---

##### `zoneIdInput`<sup>Optional</sup> <a name="zoneIdInput" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificate.property.zoneIdInput"></a>

```java
public java.lang.String getZoneIdInput();
```

- *Type:* java.lang.String

---

##### `certificateId`<sup>Required</sup> <a name="certificateId" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificate.property.certificateId"></a>

```java
public java.lang.String getCertificateId();
```

- *Type:* java.lang.String

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificate.property.zoneId"></a>

```java
public java.lang.String getZoneId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificate.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificate.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareAuthenticatedOriginPullsHostnameCertificateConfig <a name="DataCloudflareAuthenticatedOriginPullsHostnameCertificateConfig" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificateConfig.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_authenticated_origin_pulls_hostname_certificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificateConfig;

DataCloudflareAuthenticatedOriginPullsHostnameCertificateConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .certificateId(java.lang.String)
    .zoneId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificateConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificateConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificateConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificateConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificateConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificateConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificateConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificateConfig.property.certificateId">certificateId</a></code> | <code>java.lang.String</code> | Identifier. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificateConfig.property.zoneId">zoneId</a></code> | <code>java.lang.String</code> | Identifier. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificateConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificateConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificateConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificateConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificateConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificateConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificateConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `certificateId`<sup>Required</sup> <a name="certificateId" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificateConfig.property.certificateId"></a>

```java
public java.lang.String getCertificateId();
```

- *Type:* java.lang.String

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/data-sources/authenticated_origin_pulls_hostname_certificate#certificate_id DataCloudflareAuthenticatedOriginPullsHostnameCertificate#certificate_id}

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktn/provider-cloudflare.dataCloudflareAuthenticatedOriginPullsHostnameCertificate.DataCloudflareAuthenticatedOriginPullsHostnameCertificateConfig.property.zoneId"></a>

```java
public java.lang.String getZoneId();
```

- *Type:* java.lang.String

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/data-sources/authenticated_origin_pulls_hostname_certificate#zone_id DataCloudflareAuthenticatedOriginPullsHostnameCertificate#zone_id}

---



