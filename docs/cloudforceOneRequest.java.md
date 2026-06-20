# `cloudforceOneRequest` Submodule <a name="`cloudforceOneRequest` Submodule" id="@cdktn/provider-cloudflare.cloudforceOneRequest"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudforceOneRequest <a name="CloudforceOneRequest" id="@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/cloudforce_one_request cloudflare_cloudforce_one_request}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.cloudforce_one_request.CloudforceOneRequest;

CloudforceOneRequest.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .accountId(java.lang.String)
//  .content(java.lang.String)
//  .priority(java.lang.String)
//  .requestType(java.lang.String)
//  .summary(java.lang.String)
//  .tlp(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.Initializer.parameter.accountId">accountId</a></code> | <code>java.lang.String</code> | Identifier. |
| <code><a href="#@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.Initializer.parameter.content">content</a></code> | <code>java.lang.String</code> | Request content. |
| <code><a href="#@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.Initializer.parameter.priority">priority</a></code> | <code>java.lang.String</code> | Priority for analyzing the request. |
| <code><a href="#@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.Initializer.parameter.requestType">requestType</a></code> | <code>java.lang.String</code> | Requested information from request. |
| <code><a href="#@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.Initializer.parameter.summary">summary</a></code> | <code>java.lang.String</code> | Brief description of the request. |
| <code><a href="#@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.Initializer.parameter.tlp">tlp</a></code> | <code>java.lang.String</code> | The CISA defined Traffic Light Protocol (TLP). Available values: "clear", "amber", "amber-strict", "green", "red". |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.Initializer.parameter.accountId"></a>

- *Type:* java.lang.String

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/cloudforce_one_request#account_id CloudforceOneRequest#account_id}

---

##### `content`<sup>Optional</sup> <a name="content" id="@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.Initializer.parameter.content"></a>

- *Type:* java.lang.String

Request content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/cloudforce_one_request#content CloudforceOneRequest#content}

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.Initializer.parameter.priority"></a>

- *Type:* java.lang.String

Priority for analyzing the request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/cloudforce_one_request#priority CloudforceOneRequest#priority}

---

##### `requestType`<sup>Optional</sup> <a name="requestType" id="@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.Initializer.parameter.requestType"></a>

- *Type:* java.lang.String

Requested information from request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/cloudforce_one_request#request_type CloudforceOneRequest#request_type}

---

##### `summary`<sup>Optional</sup> <a name="summary" id="@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.Initializer.parameter.summary"></a>

- *Type:* java.lang.String

Brief description of the request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/cloudforce_one_request#summary CloudforceOneRequest#summary}

---

##### `tlp`<sup>Optional</sup> <a name="tlp" id="@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.Initializer.parameter.tlp"></a>

- *Type:* java.lang.String

The CISA defined Traffic Light Protocol (TLP). Available values: "clear", "amber", "amber-strict", "green", "red".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/cloudforce_one_request#tlp CloudforceOneRequest#tlp}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.resetContent">resetContent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.resetPriority">resetPriority</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.resetRequestType">resetRequestType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.resetSummary">resetSummary</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.resetTlp">resetTlp</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetContent` <a name="resetContent" id="@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.resetContent"></a>

```java
public void resetContent()
```

##### `resetPriority` <a name="resetPriority" id="@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.resetPriority"></a>

```java
public void resetPriority()
```

##### `resetRequestType` <a name="resetRequestType" id="@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.resetRequestType"></a>

```java
public void resetRequestType()
```

##### `resetSummary` <a name="resetSummary" id="@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.resetSummary"></a>

```java
public void resetSummary()
```

##### `resetTlp` <a name="resetTlp" id="@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.resetTlp"></a>

```java
public void resetTlp()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a CloudforceOneRequest resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.isConstruct"></a>

```java
import io.cdktn.providers.cloudflare.cloudforce_one_request.CloudforceOneRequest;

CloudforceOneRequest.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.isTerraformElement"></a>

```java
import io.cdktn.providers.cloudflare.cloudforce_one_request.CloudforceOneRequest;

CloudforceOneRequest.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.isTerraformResource"></a>

```java
import io.cdktn.providers.cloudflare.cloudforce_one_request.CloudforceOneRequest;

CloudforceOneRequest.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.generateConfigForImport"></a>

```java
import io.cdktn.providers.cloudflare.cloudforce_one_request.CloudforceOneRequest;

CloudforceOneRequest.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),CloudforceOneRequest.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a CloudforceOneRequest resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the CloudforceOneRequest to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing CloudforceOneRequest that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/cloudforce_one_request#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the CloudforceOneRequest to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.completed">completed</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.created">created</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.messageTokens">messageTokens</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.readableId">readableId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.request">request</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.tokens">tokens</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.updated">updated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.accountIdInput">accountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.contentInput">contentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.priorityInput">priorityInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.requestTypeInput">requestTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.summaryInput">summaryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.tlpInput">tlpInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.accountId">accountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.content">content</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.priority">priority</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.requestType">requestType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.summary">summary</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.tlp">tlp</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `completed`<sup>Required</sup> <a name="completed" id="@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.completed"></a>

```java
public java.lang.String getCompleted();
```

- *Type:* java.lang.String

---

##### `created`<sup>Required</sup> <a name="created" id="@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.created"></a>

```java
public java.lang.String getCreated();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `messageTokens`<sup>Required</sup> <a name="messageTokens" id="@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.messageTokens"></a>

```java
public java.lang.Number getMessageTokens();
```

- *Type:* java.lang.Number

---

##### `readableId`<sup>Required</sup> <a name="readableId" id="@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.readableId"></a>

```java
public java.lang.String getReadableId();
```

- *Type:* java.lang.String

---

##### `request`<sup>Required</sup> <a name="request" id="@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.request"></a>

```java
public java.lang.String getRequest();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `tokens`<sup>Required</sup> <a name="tokens" id="@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.tokens"></a>

```java
public java.lang.Number getTokens();
```

- *Type:* java.lang.Number

---

##### `updated`<sup>Required</sup> <a name="updated" id="@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.updated"></a>

```java
public java.lang.String getUpdated();
```

- *Type:* java.lang.String

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.accountIdInput"></a>

```java
public java.lang.String getAccountIdInput();
```

- *Type:* java.lang.String

---

##### `contentInput`<sup>Optional</sup> <a name="contentInput" id="@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.contentInput"></a>

```java
public java.lang.String getContentInput();
```

- *Type:* java.lang.String

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.priorityInput"></a>

```java
public java.lang.String getPriorityInput();
```

- *Type:* java.lang.String

---

##### `requestTypeInput`<sup>Optional</sup> <a name="requestTypeInput" id="@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.requestTypeInput"></a>

```java
public java.lang.String getRequestTypeInput();
```

- *Type:* java.lang.String

---

##### `summaryInput`<sup>Optional</sup> <a name="summaryInput" id="@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.summaryInput"></a>

```java
public java.lang.String getSummaryInput();
```

- *Type:* java.lang.String

---

##### `tlpInput`<sup>Optional</sup> <a name="tlpInput" id="@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.tlpInput"></a>

```java
public java.lang.String getTlpInput();
```

- *Type:* java.lang.String

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.content"></a>

```java
public java.lang.String getContent();
```

- *Type:* java.lang.String

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.priority"></a>

```java
public java.lang.String getPriority();
```

- *Type:* java.lang.String

---

##### `requestType`<sup>Required</sup> <a name="requestType" id="@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.requestType"></a>

```java
public java.lang.String getRequestType();
```

- *Type:* java.lang.String

---

##### `summary`<sup>Required</sup> <a name="summary" id="@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.summary"></a>

```java
public java.lang.String getSummary();
```

- *Type:* java.lang.String

---

##### `tlp`<sup>Required</sup> <a name="tlp" id="@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.tlp"></a>

```java
public java.lang.String getTlp();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequest.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### CloudforceOneRequestConfig <a name="CloudforceOneRequestConfig" id="@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequestConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequestConfig.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.cloudforce_one_request.CloudforceOneRequestConfig;

CloudforceOneRequestConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .accountId(java.lang.String)
//  .content(java.lang.String)
//  .priority(java.lang.String)
//  .requestType(java.lang.String)
//  .summary(java.lang.String)
//  .tlp(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequestConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequestConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequestConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequestConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequestConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequestConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequestConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequestConfig.property.accountId">accountId</a></code> | <code>java.lang.String</code> | Identifier. |
| <code><a href="#@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequestConfig.property.content">content</a></code> | <code>java.lang.String</code> | Request content. |
| <code><a href="#@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequestConfig.property.priority">priority</a></code> | <code>java.lang.String</code> | Priority for analyzing the request. |
| <code><a href="#@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequestConfig.property.requestType">requestType</a></code> | <code>java.lang.String</code> | Requested information from request. |
| <code><a href="#@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequestConfig.property.summary">summary</a></code> | <code>java.lang.String</code> | Brief description of the request. |
| <code><a href="#@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequestConfig.property.tlp">tlp</a></code> | <code>java.lang.String</code> | The CISA defined Traffic Light Protocol (TLP). Available values: "clear", "amber", "amber-strict", "green", "red". |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequestConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequestConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequestConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequestConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequestConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequestConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequestConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequestConfig.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/cloudforce_one_request#account_id CloudforceOneRequest#account_id}

---

##### `content`<sup>Optional</sup> <a name="content" id="@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequestConfig.property.content"></a>

```java
public java.lang.String getContent();
```

- *Type:* java.lang.String

Request content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/cloudforce_one_request#content CloudforceOneRequest#content}

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequestConfig.property.priority"></a>

```java
public java.lang.String getPriority();
```

- *Type:* java.lang.String

Priority for analyzing the request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/cloudforce_one_request#priority CloudforceOneRequest#priority}

---

##### `requestType`<sup>Optional</sup> <a name="requestType" id="@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequestConfig.property.requestType"></a>

```java
public java.lang.String getRequestType();
```

- *Type:* java.lang.String

Requested information from request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/cloudforce_one_request#request_type CloudforceOneRequest#request_type}

---

##### `summary`<sup>Optional</sup> <a name="summary" id="@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequestConfig.property.summary"></a>

```java
public java.lang.String getSummary();
```

- *Type:* java.lang.String

Brief description of the request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/cloudforce_one_request#summary CloudforceOneRequest#summary}

---

##### `tlp`<sup>Optional</sup> <a name="tlp" id="@cdktn/provider-cloudflare.cloudforceOneRequest.CloudforceOneRequestConfig.property.tlp"></a>

```java
public java.lang.String getTlp();
```

- *Type:* java.lang.String

The CISA defined Traffic Light Protocol (TLP). Available values: "clear", "amber", "amber-strict", "green", "red".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/cloudforce_one_request#tlp CloudforceOneRequest#tlp}

---



