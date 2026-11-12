# `zeroTrustCasbFindingType` Submodule <a name="`zeroTrustCasbFindingType` Submodule" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ZeroTrustCasbFindingType <a name="ZeroTrustCasbFindingType" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_casb_finding_type cloudflare_zero_trust_casb_finding_type}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.zero_trust_casb_finding_type.ZeroTrustCasbFindingType;

ZeroTrustCasbFindingType.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .accountId(java.lang.String)
    .appliesToAllIntegrations(java.lang.Boolean|IResolvable)
    .assetClass(java.lang.String)
    .assetVendor(java.lang.String)
    .description(java.lang.String)
    .expression(java.lang.String)
    .name(java.lang.String)
    .severity(java.lang.String)
//  .integrationIds(java.util.List<java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.Initializer.parameter.accountId">accountId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_casb_finding_type#account_id ZeroTrustCasbFindingType#account_id}. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.Initializer.parameter.appliesToAllIntegrations">appliesToAllIntegrations</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | When true, this finding type applies to every current and future integration of the vendor. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.Initializer.parameter.assetClass">assetClass</a></code> | <code>java.lang.String</code> | Asset class this finding type applies to (PascalCase, e.g. GoogleWorkspaceFile). |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.Initializer.parameter.assetVendor">assetVendor</a></code> | <code>java.lang.String</code> | Canonical vendor enum for the platform whose assets this finding type evaluates. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Human-readable description of the finding type. Cannot be empty. Maximum 4096 characters. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.Initializer.parameter.expression">expression</a></code> | <code>java.lang.String</code> | Rego expression body for the policy. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Human-readable name for the finding type. Maximum 256 characters. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.Initializer.parameter.severity">severity</a></code> | <code>java.lang.String</code> | Default severity used when no integration-specific severity override exists. Available values: "Critical", "High", "Medium", "Low". |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.Initializer.parameter.integrationIds">integrationIds</a></code> | <code>java.util.List<java.lang.String></code> | Required and non-empty when applies_to_all_integrations is false; omit when it is true. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.Initializer.parameter.accountId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_casb_finding_type#account_id ZeroTrustCasbFindingType#account_id}.

---

##### `appliesToAllIntegrations`<sup>Required</sup> <a name="appliesToAllIntegrations" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.Initializer.parameter.appliesToAllIntegrations"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

When true, this finding type applies to every current and future integration of the vendor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_casb_finding_type#applies_to_all_integrations ZeroTrustCasbFindingType#applies_to_all_integrations}

---

##### `assetClass`<sup>Required</sup> <a name="assetClass" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.Initializer.parameter.assetClass"></a>

- *Type:* java.lang.String

Asset class this finding type applies to (PascalCase, e.g. GoogleWorkspaceFile).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_casb_finding_type#asset_class ZeroTrustCasbFindingType#asset_class}

---

##### `assetVendor`<sup>Required</sup> <a name="assetVendor" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.Initializer.parameter.assetVendor"></a>

- *Type:* java.lang.String

Canonical vendor enum for the platform whose assets this finding type evaluates.

Available values: "ANTHROPIC", "AWS", "BITBUCKET", "BOX", "CONFLUENCE", "DROPBOX", "GITHUB", "GOOGLE_CLOUD_PLATFORM", "GOOGLE_WORKSPACE", "JIRA", "MICROSOFT", "OPENAI", "SALESFORCE", "SERVICENOW", "SLACK", "ZOOM".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_casb_finding_type#asset_vendor ZeroTrustCasbFindingType#asset_vendor}

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Human-readable description of the finding type. Cannot be empty. Maximum 4096 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_casb_finding_type#description ZeroTrustCasbFindingType#description}

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.Initializer.parameter.expression"></a>

- *Type:* java.lang.String

Rego expression body for the policy.

`package cloudflare.casb.custom` and `import rego.v1` are added automatically. Do not include package or import declarations. This field cannot be changed after creation. Maximum 4096 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_casb_finding_type#expression ZeroTrustCasbFindingType#expression}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Human-readable name for the finding type. Maximum 256 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_casb_finding_type#name ZeroTrustCasbFindingType#name}

---

##### `severity`<sup>Required</sup> <a name="severity" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.Initializer.parameter.severity"></a>

- *Type:* java.lang.String

Default severity used when no integration-specific severity override exists. Available values: "Critical", "High", "Medium", "Low".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_casb_finding_type#severity ZeroTrustCasbFindingType#severity}

---

##### `integrationIds`<sup>Optional</sup> <a name="integrationIds" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.Initializer.parameter.integrationIds"></a>

- *Type:* java.util.List<java.lang.String>

Required and non-empty when applies_to_all_integrations is false; omit when it is true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_casb_finding_type#integration_ids ZeroTrustCasbFindingType#integration_ids}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.resetIntegrationIds">resetIntegrationIds</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetIntegrationIds` <a name="resetIntegrationIds" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.resetIntegrationIds"></a>

```java
public void resetIntegrationIds()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ZeroTrustCasbFindingType resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.isConstruct"></a>

```java
import io.cdktn.providers.cloudflare.zero_trust_casb_finding_type.ZeroTrustCasbFindingType;

ZeroTrustCasbFindingType.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.isTerraformElement"></a>

```java
import io.cdktn.providers.cloudflare.zero_trust_casb_finding_type.ZeroTrustCasbFindingType;

ZeroTrustCasbFindingType.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.isTerraformResource"></a>

```java
import io.cdktn.providers.cloudflare.zero_trust_casb_finding_type.ZeroTrustCasbFindingType;

ZeroTrustCasbFindingType.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.generateConfigForImport"></a>

```java
import io.cdktn.providers.cloudflare.zero_trust_casb_finding_type.ZeroTrustCasbFindingType;

ZeroTrustCasbFindingType.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ZeroTrustCasbFindingType.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a ZeroTrustCasbFindingType resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ZeroTrustCasbFindingType to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ZeroTrustCasbFindingType that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_casb_finding_type#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the ZeroTrustCasbFindingType to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.category">category</a></code> | <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeCategoryOutputReference">ZeroTrustCasbFindingTypeCategoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.matchCount">matchCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.origin">origin</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.quarantined">quarantined</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.updatedAt">updatedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.vendor">vendor</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.version">version</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.accountIdInput">accountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.appliesToAllIntegrationsInput">appliesToAllIntegrationsInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.assetClassInput">assetClassInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.assetVendorInput">assetVendorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.expressionInput">expressionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.integrationIdsInput">integrationIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.severityInput">severityInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.accountId">accountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.appliesToAllIntegrations">appliesToAllIntegrations</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.assetClass">assetClass</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.assetVendor">assetVendor</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.expression">expression</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.integrationIds">integrationIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.severity">severity</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.category"></a>

```java
public ZeroTrustCasbFindingTypeCategoryOutputReference getCategory();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeCategoryOutputReference">ZeroTrustCasbFindingTypeCategoryOutputReference</a>

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `matchCount`<sup>Required</sup> <a name="matchCount" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.matchCount"></a>

```java
public java.lang.Number getMatchCount();
```

- *Type:* java.lang.Number

---

##### `origin`<sup>Required</sup> <a name="origin" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.origin"></a>

```java
public java.lang.String getOrigin();
```

- *Type:* java.lang.String

---

##### `quarantined`<sup>Required</sup> <a name="quarantined" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.quarantined"></a>

```java
public IResolvable getQuarantined();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.updatedAt"></a>

```java
public java.lang.String getUpdatedAt();
```

- *Type:* java.lang.String

---

##### `vendor`<sup>Required</sup> <a name="vendor" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.vendor"></a>

```java
public java.lang.String getVendor();
```

- *Type:* java.lang.String

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.version"></a>

```java
public java.lang.Number getVersion();
```

- *Type:* java.lang.Number

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.accountIdInput"></a>

```java
public java.lang.String getAccountIdInput();
```

- *Type:* java.lang.String

---

##### `appliesToAllIntegrationsInput`<sup>Optional</sup> <a name="appliesToAllIntegrationsInput" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.appliesToAllIntegrationsInput"></a>

```java
public java.lang.Boolean|IResolvable getAppliesToAllIntegrationsInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `assetClassInput`<sup>Optional</sup> <a name="assetClassInput" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.assetClassInput"></a>

```java
public java.lang.String getAssetClassInput();
```

- *Type:* java.lang.String

---

##### `assetVendorInput`<sup>Optional</sup> <a name="assetVendorInput" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.assetVendorInput"></a>

```java
public java.lang.String getAssetVendorInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.expressionInput"></a>

```java
public java.lang.String getExpressionInput();
```

- *Type:* java.lang.String

---

##### `integrationIdsInput`<sup>Optional</sup> <a name="integrationIdsInput" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.integrationIdsInput"></a>

```java
public java.util.List<java.lang.String> getIntegrationIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `severityInput`<sup>Optional</sup> <a name="severityInput" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.severityInput"></a>

```java
public java.lang.String getSeverityInput();
```

- *Type:* java.lang.String

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

---

##### `appliesToAllIntegrations`<sup>Required</sup> <a name="appliesToAllIntegrations" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.appliesToAllIntegrations"></a>

```java
public java.lang.Boolean|IResolvable getAppliesToAllIntegrations();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `assetClass`<sup>Required</sup> <a name="assetClass" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.assetClass"></a>

```java
public java.lang.String getAssetClass();
```

- *Type:* java.lang.String

---

##### `assetVendor`<sup>Required</sup> <a name="assetVendor" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.assetVendor"></a>

```java
public java.lang.String getAssetVendor();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.expression"></a>

```java
public java.lang.String getExpression();
```

- *Type:* java.lang.String

---

##### `integrationIds`<sup>Required</sup> <a name="integrationIds" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.integrationIds"></a>

```java
public java.util.List<java.lang.String> getIntegrationIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `severity`<sup>Required</sup> <a name="severity" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.severity"></a>

```java
public java.lang.String getSeverity();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingType.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ZeroTrustCasbFindingTypeCategory <a name="ZeroTrustCasbFindingTypeCategory" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeCategory"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeCategory.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.zero_trust_casb_finding_type.ZeroTrustCasbFindingTypeCategory;

ZeroTrustCasbFindingTypeCategory.builder()
    .build();
```


### ZeroTrustCasbFindingTypeConfig <a name="ZeroTrustCasbFindingTypeConfig" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeConfig.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.zero_trust_casb_finding_type.ZeroTrustCasbFindingTypeConfig;

ZeroTrustCasbFindingTypeConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .accountId(java.lang.String)
    .appliesToAllIntegrations(java.lang.Boolean|IResolvable)
    .assetClass(java.lang.String)
    .assetVendor(java.lang.String)
    .description(java.lang.String)
    .expression(java.lang.String)
    .name(java.lang.String)
    .severity(java.lang.String)
//  .integrationIds(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeConfig.property.accountId">accountId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_casb_finding_type#account_id ZeroTrustCasbFindingType#account_id}. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeConfig.property.appliesToAllIntegrations">appliesToAllIntegrations</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | When true, this finding type applies to every current and future integration of the vendor. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeConfig.property.assetClass">assetClass</a></code> | <code>java.lang.String</code> | Asset class this finding type applies to (PascalCase, e.g. GoogleWorkspaceFile). |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeConfig.property.assetVendor">assetVendor</a></code> | <code>java.lang.String</code> | Canonical vendor enum for the platform whose assets this finding type evaluates. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeConfig.property.description">description</a></code> | <code>java.lang.String</code> | Human-readable description of the finding type. Cannot be empty. Maximum 4096 characters. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeConfig.property.expression">expression</a></code> | <code>java.lang.String</code> | Rego expression body for the policy. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeConfig.property.name">name</a></code> | <code>java.lang.String</code> | Human-readable name for the finding type. Maximum 256 characters. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeConfig.property.severity">severity</a></code> | <code>java.lang.String</code> | Default severity used when no integration-specific severity override exists. Available values: "Critical", "High", "Medium", "Low". |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeConfig.property.integrationIds">integrationIds</a></code> | <code>java.util.List<java.lang.String></code> | Required and non-empty when applies_to_all_integrations is false; omit when it is true. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeConfig.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_casb_finding_type#account_id ZeroTrustCasbFindingType#account_id}.

---

##### `appliesToAllIntegrations`<sup>Required</sup> <a name="appliesToAllIntegrations" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeConfig.property.appliesToAllIntegrations"></a>

```java
public java.lang.Boolean|IResolvable getAppliesToAllIntegrations();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

When true, this finding type applies to every current and future integration of the vendor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_casb_finding_type#applies_to_all_integrations ZeroTrustCasbFindingType#applies_to_all_integrations}

---

##### `assetClass`<sup>Required</sup> <a name="assetClass" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeConfig.property.assetClass"></a>

```java
public java.lang.String getAssetClass();
```

- *Type:* java.lang.String

Asset class this finding type applies to (PascalCase, e.g. GoogleWorkspaceFile).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_casb_finding_type#asset_class ZeroTrustCasbFindingType#asset_class}

---

##### `assetVendor`<sup>Required</sup> <a name="assetVendor" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeConfig.property.assetVendor"></a>

```java
public java.lang.String getAssetVendor();
```

- *Type:* java.lang.String

Canonical vendor enum for the platform whose assets this finding type evaluates.

Available values: "ANTHROPIC", "AWS", "BITBUCKET", "BOX", "CONFLUENCE", "DROPBOX", "GITHUB", "GOOGLE_CLOUD_PLATFORM", "GOOGLE_WORKSPACE", "JIRA", "MICROSOFT", "OPENAI", "SALESFORCE", "SERVICENOW", "SLACK", "ZOOM".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_casb_finding_type#asset_vendor ZeroTrustCasbFindingType#asset_vendor}

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Human-readable description of the finding type. Cannot be empty. Maximum 4096 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_casb_finding_type#description ZeroTrustCasbFindingType#description}

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeConfig.property.expression"></a>

```java
public java.lang.String getExpression();
```

- *Type:* java.lang.String

Rego expression body for the policy.

`package cloudflare.casb.custom` and `import rego.v1` are added automatically. Do not include package or import declarations. This field cannot be changed after creation. Maximum 4096 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_casb_finding_type#expression ZeroTrustCasbFindingType#expression}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Human-readable name for the finding type. Maximum 256 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_casb_finding_type#name ZeroTrustCasbFindingType#name}

---

##### `severity`<sup>Required</sup> <a name="severity" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeConfig.property.severity"></a>

```java
public java.lang.String getSeverity();
```

- *Type:* java.lang.String

Default severity used when no integration-specific severity override exists. Available values: "Critical", "High", "Medium", "Low".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_casb_finding_type#severity ZeroTrustCasbFindingType#severity}

---

##### `integrationIds`<sup>Optional</sup> <a name="integrationIds" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeConfig.property.integrationIds"></a>

```java
public java.util.List<java.lang.String> getIntegrationIds();
```

- *Type:* java.util.List<java.lang.String>

Required and non-empty when applies_to_all_integrations is false; omit when it is true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_casb_finding_type#integration_ids ZeroTrustCasbFindingType#integration_ids}

---

## Classes <a name="Classes" id="Classes"></a>

### ZeroTrustCasbFindingTypeCategoryOutputReference <a name="ZeroTrustCasbFindingTypeCategoryOutputReference" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeCategoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeCategoryOutputReference.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.zero_trust_casb_finding_type.ZeroTrustCasbFindingTypeCategoryOutputReference;

new ZeroTrustCasbFindingTypeCategoryOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeCategoryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeCategoryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeCategoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeCategoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeCategoryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeCategoryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeCategoryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeCategoryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeCategoryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeCategoryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeCategoryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeCategoryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeCategoryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeCategoryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeCategoryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeCategoryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeCategoryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeCategoryOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeCategoryOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeCategoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeCategoryOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeCategoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeCategoryOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeCategoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeCategoryOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeCategoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeCategoryOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeCategoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeCategoryOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeCategoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeCategoryOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeCategoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeCategoryOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeCategoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeCategoryOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeCategoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeCategoryOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeCategoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeCategoryOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeCategoryOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeCategoryOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeCategoryOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeCategoryOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeCategoryOutputReference.property.observation">observation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeCategoryOutputReference.property.product">product</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeCategoryOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeCategoryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeCategory">ZeroTrustCasbFindingTypeCategory</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeCategoryOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeCategoryOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `observation`<sup>Required</sup> <a name="observation" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeCategoryOutputReference.property.observation"></a>

```java
public java.lang.String getObservation();
```

- *Type:* java.lang.String

---

##### `product`<sup>Required</sup> <a name="product" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeCategoryOutputReference.property.product"></a>

```java
public java.lang.String getProduct();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeCategoryOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeCategoryOutputReference.property.internalValue"></a>

```java
public ZeroTrustCasbFindingTypeCategory getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.zeroTrustCasbFindingType.ZeroTrustCasbFindingTypeCategory">ZeroTrustCasbFindingTypeCategory</a>

---



