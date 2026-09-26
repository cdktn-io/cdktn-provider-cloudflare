# `zeroTrustCasbPolicy` Submodule <a name="`zeroTrustCasbPolicy` Submodule" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ZeroTrustCasbPolicy <a name="ZeroTrustCasbPolicy" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.26.0/docs/resources/zero_trust_casb_policy cloudflare_zero_trust_casb_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.zero_trust_casb_policy.ZeroTrustCasbPolicy;

ZeroTrustCasbPolicy.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .accountId(java.lang.String)
    .actions(ZeroTrustCasbPolicyActions)
    .appliesToAllIntegrations(java.lang.Boolean|IResolvable)
    .displayName(java.lang.String)
    .enabled(java.lang.Boolean|IResolvable)
    .findingTypeId(java.lang.String)
//  .description(java.lang.String)
//  .integrationIds(java.util.List<java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.Initializer.parameter.accountId">accountId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.26.0/docs/resources/zero_trust_casb_policy#account_id ZeroTrustCasbPolicy#account_id}. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.Initializer.parameter.actions">actions</a></code> | <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActions">ZeroTrustCasbPolicyActions</a></code> | Actions to execute when this policy is triggered, grouped by action type. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.Initializer.parameter.appliesToAllIntegrations">appliesToAllIntegrations</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | When true, the policy applies to all integrations for the account. When false, integration_ids must be provided. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Display name for the policy configuration. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.Initializer.parameter.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Boolean specifying if the policy is enabled or disabled. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.Initializer.parameter.findingTypeId">findingTypeId</a></code> | <code>java.lang.String</code> | The finding type this policy is associated with. All remediation actions must match this finding type. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Optional description of what this policy does. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.Initializer.parameter.integrationIds">integrationIds</a></code> | <code>java.util.List<java.lang.String></code> | The integrations this policy applies to. Required when applies_to_all_integrations is false. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.Initializer.parameter.accountId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.26.0/docs/resources/zero_trust_casb_policy#account_id ZeroTrustCasbPolicy#account_id}.

---

##### `actions`<sup>Required</sup> <a name="actions" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.Initializer.parameter.actions"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActions">ZeroTrustCasbPolicyActions</a>

Actions to execute when this policy is triggered, grouped by action type.

A policy must contain at least one action across all groups and may include
at most one remediation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.26.0/docs/resources/zero_trust_casb_policy#actions ZeroTrustCasbPolicy#actions}

---

##### `appliesToAllIntegrations`<sup>Required</sup> <a name="appliesToAllIntegrations" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.Initializer.parameter.appliesToAllIntegrations"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

When true, the policy applies to all integrations for the account. When false, integration_ids must be provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.26.0/docs/resources/zero_trust_casb_policy#applies_to_all_integrations ZeroTrustCasbPolicy#applies_to_all_integrations}

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Display name for the policy configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.26.0/docs/resources/zero_trust_casb_policy#display_name ZeroTrustCasbPolicy#display_name}

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.Initializer.parameter.enabled"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Boolean specifying if the policy is enabled or disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.26.0/docs/resources/zero_trust_casb_policy#enabled ZeroTrustCasbPolicy#enabled}

---

##### `findingTypeId`<sup>Required</sup> <a name="findingTypeId" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.Initializer.parameter.findingTypeId"></a>

- *Type:* java.lang.String

The finding type this policy is associated with. All remediation actions must match this finding type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.26.0/docs/resources/zero_trust_casb_policy#finding_type_id ZeroTrustCasbPolicy#finding_type_id}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Optional description of what this policy does.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.26.0/docs/resources/zero_trust_casb_policy#description ZeroTrustCasbPolicy#description}

---

##### `integrationIds`<sup>Optional</sup> <a name="integrationIds" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.Initializer.parameter.integrationIds"></a>

- *Type:* java.util.List<java.lang.String>

The integrations this policy applies to. Required when applies_to_all_integrations is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.26.0/docs/resources/zero_trust_casb_policy#integration_ids ZeroTrustCasbPolicy#integration_ids}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.putActions">putActions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.resetIntegrationIds">resetIntegrationIds</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putActions` <a name="putActions" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.putActions"></a>

```java
public void putActions(ZeroTrustCasbPolicyActions value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.putActions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActions">ZeroTrustCasbPolicyActions</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetIntegrationIds` <a name="resetIntegrationIds" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.resetIntegrationIds"></a>

```java
public void resetIntegrationIds()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ZeroTrustCasbPolicy resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.isConstruct"></a>

```java
import io.cdktn.providers.cloudflare.zero_trust_casb_policy.ZeroTrustCasbPolicy;

ZeroTrustCasbPolicy.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.isTerraformElement"></a>

```java
import io.cdktn.providers.cloudflare.zero_trust_casb_policy.ZeroTrustCasbPolicy;

ZeroTrustCasbPolicy.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.isTerraformResource"></a>

```java
import io.cdktn.providers.cloudflare.zero_trust_casb_policy.ZeroTrustCasbPolicy;

ZeroTrustCasbPolicy.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.generateConfigForImport"></a>

```java
import io.cdktn.providers.cloudflare.zero_trust_casb_policy.ZeroTrustCasbPolicy;

ZeroTrustCasbPolicy.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ZeroTrustCasbPolicy.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a ZeroTrustCasbPolicy resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ZeroTrustCasbPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ZeroTrustCasbPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.26.0/docs/resources/zero_trust_casb_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the ZeroTrustCasbPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.property.actions">actions</a></code> | <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsOutputReference">ZeroTrustCasbPolicyActionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.property.disabledAt">disabledAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.property.lastTriggeredAt">lastTriggeredAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.property.updatedAt">updatedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.property.accountIdInput">accountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.property.actionsInput">actionsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActions">ZeroTrustCasbPolicyActions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.property.appliesToAllIntegrationsInput">appliesToAllIntegrationsInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.property.findingTypeIdInput">findingTypeIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.property.integrationIdsInput">integrationIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.property.accountId">accountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.property.appliesToAllIntegrations">appliesToAllIntegrations</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.property.findingTypeId">findingTypeId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.property.integrationIds">integrationIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `actions`<sup>Required</sup> <a name="actions" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.property.actions"></a>

```java
public ZeroTrustCasbPolicyActionsOutputReference getActions();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsOutputReference">ZeroTrustCasbPolicyActionsOutputReference</a>

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `disabledAt`<sup>Required</sup> <a name="disabledAt" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.property.disabledAt"></a>

```java
public java.lang.String getDisabledAt();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `lastTriggeredAt`<sup>Required</sup> <a name="lastTriggeredAt" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.property.lastTriggeredAt"></a>

```java
public java.lang.String getLastTriggeredAt();
```

- *Type:* java.lang.String

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.property.updatedAt"></a>

```java
public java.lang.String getUpdatedAt();
```

- *Type:* java.lang.String

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.property.accountIdInput"></a>

```java
public java.lang.String getAccountIdInput();
```

- *Type:* java.lang.String

---

##### `actionsInput`<sup>Optional</sup> <a name="actionsInput" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.property.actionsInput"></a>

```java
public IResolvable|ZeroTrustCasbPolicyActions getActionsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActions">ZeroTrustCasbPolicyActions</a>

---

##### `appliesToAllIntegrationsInput`<sup>Optional</sup> <a name="appliesToAllIntegrationsInput" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.property.appliesToAllIntegrationsInput"></a>

```java
public java.lang.Boolean|IResolvable getAppliesToAllIntegrationsInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.property.enabledInput"></a>

```java
public java.lang.Boolean|IResolvable getEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `findingTypeIdInput`<sup>Optional</sup> <a name="findingTypeIdInput" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.property.findingTypeIdInput"></a>

```java
public java.lang.String getFindingTypeIdInput();
```

- *Type:* java.lang.String

---

##### `integrationIdsInput`<sup>Optional</sup> <a name="integrationIdsInput" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.property.integrationIdsInput"></a>

```java
public java.util.List<java.lang.String> getIntegrationIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

---

##### `appliesToAllIntegrations`<sup>Required</sup> <a name="appliesToAllIntegrations" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.property.appliesToAllIntegrations"></a>

```java
public java.lang.Boolean|IResolvable getAppliesToAllIntegrations();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `findingTypeId`<sup>Required</sup> <a name="findingTypeId" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.property.findingTypeId"></a>

```java
public java.lang.String getFindingTypeId();
```

- *Type:* java.lang.String

---

##### `integrationIds`<sup>Required</sup> <a name="integrationIds" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.property.integrationIds"></a>

```java
public java.util.List<java.lang.String> getIntegrationIds();
```

- *Type:* java.util.List<java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicy.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ZeroTrustCasbPolicyActions <a name="ZeroTrustCasbPolicyActions" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActions.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.zero_trust_casb_policy.ZeroTrustCasbPolicyActions;

ZeroTrustCasbPolicyActions.builder()
//  .remediationTypes(IResolvable|java.util.List<ZeroTrustCasbPolicyActionsRemediationTypes>)
//  .webhookConfigs(IResolvable|java.util.List<ZeroTrustCasbPolicyActionsWebhookConfigs>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActions.property.remediationTypes">remediationTypes</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsRemediationTypes">ZeroTrustCasbPolicyActionsRemediationTypes</a>></code> | Remediation actions to execute (at most one). |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActions.property.webhookConfigs">webhookConfigs</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsWebhookConfigs">ZeroTrustCasbPolicyActionsWebhookConfigs</a>></code> | Webhook actions to execute. |

---

##### `remediationTypes`<sup>Optional</sup> <a name="remediationTypes" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActions.property.remediationTypes"></a>

```java
public IResolvable|java.util.List<ZeroTrustCasbPolicyActionsRemediationTypes> getRemediationTypes();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsRemediationTypes">ZeroTrustCasbPolicyActionsRemediationTypes</a>>

Remediation actions to execute (at most one).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.26.0/docs/resources/zero_trust_casb_policy#remediation_types ZeroTrustCasbPolicy#remediation_types}

---

##### `webhookConfigs`<sup>Optional</sup> <a name="webhookConfigs" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActions.property.webhookConfigs"></a>

```java
public IResolvable|java.util.List<ZeroTrustCasbPolicyActionsWebhookConfigs> getWebhookConfigs();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsWebhookConfigs">ZeroTrustCasbPolicyActionsWebhookConfigs</a>>

Webhook actions to execute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.26.0/docs/resources/zero_trust_casb_policy#webhook_configs ZeroTrustCasbPolicy#webhook_configs}

---

### ZeroTrustCasbPolicyActionsRemediationTypes <a name="ZeroTrustCasbPolicyActionsRemediationTypes" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsRemediationTypes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsRemediationTypes.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.zero_trust_casb_policy.ZeroTrustCasbPolicyActionsRemediationTypes;

ZeroTrustCasbPolicyActionsRemediationTypes.builder()
    .remediationTypeId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsRemediationTypes.property.remediationTypeId">remediationTypeId</a></code> | <code>java.lang.String</code> | The ID of the remediation type to execute. |

---

##### `remediationTypeId`<sup>Required</sup> <a name="remediationTypeId" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsRemediationTypes.property.remediationTypeId"></a>

```java
public java.lang.String getRemediationTypeId();
```

- *Type:* java.lang.String

The ID of the remediation type to execute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.26.0/docs/resources/zero_trust_casb_policy#remediation_type_id ZeroTrustCasbPolicy#remediation_type_id}

---

### ZeroTrustCasbPolicyActionsWebhookConfigs <a name="ZeroTrustCasbPolicyActionsWebhookConfigs" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsWebhookConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsWebhookConfigs.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.zero_trust_casb_policy.ZeroTrustCasbPolicyActionsWebhookConfigs;

ZeroTrustCasbPolicyActionsWebhookConfigs.builder()
    .webhookConfigId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsWebhookConfigs.property.webhookConfigId">webhookConfigId</a></code> | <code>java.lang.String</code> | The ID of the webhook configuration to use. |

---

##### `webhookConfigId`<sup>Required</sup> <a name="webhookConfigId" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsWebhookConfigs.property.webhookConfigId"></a>

```java
public java.lang.String getWebhookConfigId();
```

- *Type:* java.lang.String

The ID of the webhook configuration to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.26.0/docs/resources/zero_trust_casb_policy#webhook_config_id ZeroTrustCasbPolicy#webhook_config_id}

---

### ZeroTrustCasbPolicyConfig <a name="ZeroTrustCasbPolicyConfig" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyConfig.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.zero_trust_casb_policy.ZeroTrustCasbPolicyConfig;

ZeroTrustCasbPolicyConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .accountId(java.lang.String)
    .actions(ZeroTrustCasbPolicyActions)
    .appliesToAllIntegrations(java.lang.Boolean|IResolvable)
    .displayName(java.lang.String)
    .enabled(java.lang.Boolean|IResolvable)
    .findingTypeId(java.lang.String)
//  .description(java.lang.String)
//  .integrationIds(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyConfig.property.accountId">accountId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.26.0/docs/resources/zero_trust_casb_policy#account_id ZeroTrustCasbPolicy#account_id}. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyConfig.property.actions">actions</a></code> | <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActions">ZeroTrustCasbPolicyActions</a></code> | Actions to execute when this policy is triggered, grouped by action type. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyConfig.property.appliesToAllIntegrations">appliesToAllIntegrations</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | When true, the policy applies to all integrations for the account. When false, integration_ids must be provided. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Display name for the policy configuration. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyConfig.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Boolean specifying if the policy is enabled or disabled. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyConfig.property.findingTypeId">findingTypeId</a></code> | <code>java.lang.String</code> | The finding type this policy is associated with. All remediation actions must match this finding type. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyConfig.property.description">description</a></code> | <code>java.lang.String</code> | Optional description of what this policy does. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyConfig.property.integrationIds">integrationIds</a></code> | <code>java.util.List<java.lang.String></code> | The integrations this policy applies to. Required when applies_to_all_integrations is false. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyConfig.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.26.0/docs/resources/zero_trust_casb_policy#account_id ZeroTrustCasbPolicy#account_id}.

---

##### `actions`<sup>Required</sup> <a name="actions" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyConfig.property.actions"></a>

```java
public ZeroTrustCasbPolicyActions getActions();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActions">ZeroTrustCasbPolicyActions</a>

Actions to execute when this policy is triggered, grouped by action type.

A policy must contain at least one action across all groups and may include
at most one remediation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.26.0/docs/resources/zero_trust_casb_policy#actions ZeroTrustCasbPolicy#actions}

---

##### `appliesToAllIntegrations`<sup>Required</sup> <a name="appliesToAllIntegrations" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyConfig.property.appliesToAllIntegrations"></a>

```java
public java.lang.Boolean|IResolvable getAppliesToAllIntegrations();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

When true, the policy applies to all integrations for the account. When false, integration_ids must be provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.26.0/docs/resources/zero_trust_casb_policy#applies_to_all_integrations ZeroTrustCasbPolicy#applies_to_all_integrations}

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Display name for the policy configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.26.0/docs/resources/zero_trust_casb_policy#display_name ZeroTrustCasbPolicy#display_name}

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyConfig.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Boolean specifying if the policy is enabled or disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.26.0/docs/resources/zero_trust_casb_policy#enabled ZeroTrustCasbPolicy#enabled}

---

##### `findingTypeId`<sup>Required</sup> <a name="findingTypeId" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyConfig.property.findingTypeId"></a>

```java
public java.lang.String getFindingTypeId();
```

- *Type:* java.lang.String

The finding type this policy is associated with. All remediation actions must match this finding type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.26.0/docs/resources/zero_trust_casb_policy#finding_type_id ZeroTrustCasbPolicy#finding_type_id}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Optional description of what this policy does.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.26.0/docs/resources/zero_trust_casb_policy#description ZeroTrustCasbPolicy#description}

---

##### `integrationIds`<sup>Optional</sup> <a name="integrationIds" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyConfig.property.integrationIds"></a>

```java
public java.util.List<java.lang.String> getIntegrationIds();
```

- *Type:* java.util.List<java.lang.String>

The integrations this policy applies to. Required when applies_to_all_integrations is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.26.0/docs/resources/zero_trust_casb_policy#integration_ids ZeroTrustCasbPolicy#integration_ids}

---

## Classes <a name="Classes" id="Classes"></a>

### ZeroTrustCasbPolicyActionsOutputReference <a name="ZeroTrustCasbPolicyActionsOutputReference" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.zero_trust_casb_policy.ZeroTrustCasbPolicyActionsOutputReference;

new ZeroTrustCasbPolicyActionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsOutputReference.putRemediationTypes">putRemediationTypes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsOutputReference.putWebhookConfigs">putWebhookConfigs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsOutputReference.resetRemediationTypes">resetRemediationTypes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsOutputReference.resetWebhookConfigs">resetWebhookConfigs</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRemediationTypes` <a name="putRemediationTypes" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsOutputReference.putRemediationTypes"></a>

```java
public void putRemediationTypes(IResolvable|java.util.List<ZeroTrustCasbPolicyActionsRemediationTypes> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsOutputReference.putRemediationTypes.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsRemediationTypes">ZeroTrustCasbPolicyActionsRemediationTypes</a>>

---

##### `putWebhookConfigs` <a name="putWebhookConfigs" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsOutputReference.putWebhookConfigs"></a>

```java
public void putWebhookConfigs(IResolvable|java.util.List<ZeroTrustCasbPolicyActionsWebhookConfigs> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsOutputReference.putWebhookConfigs.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsWebhookConfigs">ZeroTrustCasbPolicyActionsWebhookConfigs</a>>

---

##### `resetRemediationTypes` <a name="resetRemediationTypes" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsOutputReference.resetRemediationTypes"></a>

```java
public void resetRemediationTypes()
```

##### `resetWebhookConfigs` <a name="resetWebhookConfigs" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsOutputReference.resetWebhookConfigs"></a>

```java
public void resetWebhookConfigs()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsOutputReference.property.remediationTypes">remediationTypes</a></code> | <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsRemediationTypesList">ZeroTrustCasbPolicyActionsRemediationTypesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsOutputReference.property.webhookConfigs">webhookConfigs</a></code> | <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsWebhookConfigsList">ZeroTrustCasbPolicyActionsWebhookConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsOutputReference.property.remediationTypesInput">remediationTypesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsRemediationTypes">ZeroTrustCasbPolicyActionsRemediationTypes</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsOutputReference.property.webhookConfigsInput">webhookConfigsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsWebhookConfigs">ZeroTrustCasbPolicyActionsWebhookConfigs</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActions">ZeroTrustCasbPolicyActions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `remediationTypes`<sup>Required</sup> <a name="remediationTypes" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsOutputReference.property.remediationTypes"></a>

```java
public ZeroTrustCasbPolicyActionsRemediationTypesList getRemediationTypes();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsRemediationTypesList">ZeroTrustCasbPolicyActionsRemediationTypesList</a>

---

##### `webhookConfigs`<sup>Required</sup> <a name="webhookConfigs" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsOutputReference.property.webhookConfigs"></a>

```java
public ZeroTrustCasbPolicyActionsWebhookConfigsList getWebhookConfigs();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsWebhookConfigsList">ZeroTrustCasbPolicyActionsWebhookConfigsList</a>

---

##### `remediationTypesInput`<sup>Optional</sup> <a name="remediationTypesInput" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsOutputReference.property.remediationTypesInput"></a>

```java
public IResolvable|java.util.List<ZeroTrustCasbPolicyActionsRemediationTypes> getRemediationTypesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsRemediationTypes">ZeroTrustCasbPolicyActionsRemediationTypes</a>>

---

##### `webhookConfigsInput`<sup>Optional</sup> <a name="webhookConfigsInput" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsOutputReference.property.webhookConfigsInput"></a>

```java
public IResolvable|java.util.List<ZeroTrustCasbPolicyActionsWebhookConfigs> getWebhookConfigsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsWebhookConfigs">ZeroTrustCasbPolicyActionsWebhookConfigs</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsOutputReference.property.internalValue"></a>

```java
public IResolvable|ZeroTrustCasbPolicyActions getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActions">ZeroTrustCasbPolicyActions</a>

---


### ZeroTrustCasbPolicyActionsRemediationTypesList <a name="ZeroTrustCasbPolicyActionsRemediationTypesList" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsRemediationTypesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsRemediationTypesList.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.zero_trust_casb_policy.ZeroTrustCasbPolicyActionsRemediationTypesList;

new ZeroTrustCasbPolicyActionsRemediationTypesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsRemediationTypesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsRemediationTypesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsRemediationTypesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsRemediationTypesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsRemediationTypesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsRemediationTypesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsRemediationTypesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsRemediationTypesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsRemediationTypesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsRemediationTypesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsRemediationTypesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsRemediationTypesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsRemediationTypesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsRemediationTypesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsRemediationTypesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsRemediationTypesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsRemediationTypesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsRemediationTypesList.get"></a>

```java
public ZeroTrustCasbPolicyActionsRemediationTypesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsRemediationTypesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsRemediationTypesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsRemediationTypesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsRemediationTypesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsRemediationTypes">ZeroTrustCasbPolicyActionsRemediationTypes</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsRemediationTypesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsRemediationTypesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsRemediationTypesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<ZeroTrustCasbPolicyActionsRemediationTypes> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsRemediationTypes">ZeroTrustCasbPolicyActionsRemediationTypes</a>>

---


### ZeroTrustCasbPolicyActionsRemediationTypesOutputReference <a name="ZeroTrustCasbPolicyActionsRemediationTypesOutputReference" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsRemediationTypesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsRemediationTypesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.zero_trust_casb_policy.ZeroTrustCasbPolicyActionsRemediationTypesOutputReference;

new ZeroTrustCasbPolicyActionsRemediationTypesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsRemediationTypesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsRemediationTypesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsRemediationTypesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsRemediationTypesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsRemediationTypesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsRemediationTypesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsRemediationTypesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsRemediationTypesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsRemediationTypesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsRemediationTypesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsRemediationTypesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsRemediationTypesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsRemediationTypesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsRemediationTypesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsRemediationTypesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsRemediationTypesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsRemediationTypesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsRemediationTypesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsRemediationTypesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsRemediationTypesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsRemediationTypesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsRemediationTypesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsRemediationTypesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsRemediationTypesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsRemediationTypesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsRemediationTypesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsRemediationTypesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsRemediationTypesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsRemediationTypesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsRemediationTypesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsRemediationTypesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsRemediationTypesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsRemediationTypesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsRemediationTypesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsRemediationTypesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsRemediationTypesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsRemediationTypesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsRemediationTypesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsRemediationTypesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsRemediationTypesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsRemediationTypesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsRemediationTypesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsRemediationTypesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsRemediationTypesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsRemediationTypesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsRemediationTypesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsRemediationTypesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsRemediationTypesOutputReference.property.remediationTypeIdInput">remediationTypeIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsRemediationTypesOutputReference.property.remediationTypeId">remediationTypeId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsRemediationTypesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsRemediationTypes">ZeroTrustCasbPolicyActionsRemediationTypes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsRemediationTypesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsRemediationTypesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `remediationTypeIdInput`<sup>Optional</sup> <a name="remediationTypeIdInput" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsRemediationTypesOutputReference.property.remediationTypeIdInput"></a>

```java
public java.lang.String getRemediationTypeIdInput();
```

- *Type:* java.lang.String

---

##### `remediationTypeId`<sup>Required</sup> <a name="remediationTypeId" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsRemediationTypesOutputReference.property.remediationTypeId"></a>

```java
public java.lang.String getRemediationTypeId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsRemediationTypesOutputReference.property.internalValue"></a>

```java
public IResolvable|ZeroTrustCasbPolicyActionsRemediationTypes getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsRemediationTypes">ZeroTrustCasbPolicyActionsRemediationTypes</a>

---


### ZeroTrustCasbPolicyActionsWebhookConfigsList <a name="ZeroTrustCasbPolicyActionsWebhookConfigsList" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsWebhookConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsWebhookConfigsList.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.zero_trust_casb_policy.ZeroTrustCasbPolicyActionsWebhookConfigsList;

new ZeroTrustCasbPolicyActionsWebhookConfigsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsWebhookConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsWebhookConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsWebhookConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsWebhookConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsWebhookConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsWebhookConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsWebhookConfigsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsWebhookConfigsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsWebhookConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsWebhookConfigsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsWebhookConfigsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsWebhookConfigsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsWebhookConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsWebhookConfigsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsWebhookConfigsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsWebhookConfigsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsWebhookConfigsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsWebhookConfigsList.get"></a>

```java
public ZeroTrustCasbPolicyActionsWebhookConfigsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsWebhookConfigsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsWebhookConfigsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsWebhookConfigsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsWebhookConfigsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsWebhookConfigs">ZeroTrustCasbPolicyActionsWebhookConfigs</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsWebhookConfigsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsWebhookConfigsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsWebhookConfigsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<ZeroTrustCasbPolicyActionsWebhookConfigs> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsWebhookConfigs">ZeroTrustCasbPolicyActionsWebhookConfigs</a>>

---


### ZeroTrustCasbPolicyActionsWebhookConfigsOutputReference <a name="ZeroTrustCasbPolicyActionsWebhookConfigsOutputReference" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsWebhookConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsWebhookConfigsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.zero_trust_casb_policy.ZeroTrustCasbPolicyActionsWebhookConfigsOutputReference;

new ZeroTrustCasbPolicyActionsWebhookConfigsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsWebhookConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsWebhookConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsWebhookConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsWebhookConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsWebhookConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsWebhookConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsWebhookConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsWebhookConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsWebhookConfigsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsWebhookConfigsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsWebhookConfigsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsWebhookConfigsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsWebhookConfigsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsWebhookConfigsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsWebhookConfigsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsWebhookConfigsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsWebhookConfigsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsWebhookConfigsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsWebhookConfigsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsWebhookConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsWebhookConfigsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsWebhookConfigsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsWebhookConfigsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsWebhookConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsWebhookConfigsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsWebhookConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsWebhookConfigsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsWebhookConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsWebhookConfigsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsWebhookConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsWebhookConfigsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsWebhookConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsWebhookConfigsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsWebhookConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsWebhookConfigsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsWebhookConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsWebhookConfigsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsWebhookConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsWebhookConfigsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsWebhookConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsWebhookConfigsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsWebhookConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsWebhookConfigsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsWebhookConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsWebhookConfigsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsWebhookConfigsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsWebhookConfigsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsWebhookConfigsOutputReference.property.webhookConfigIdInput">webhookConfigIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsWebhookConfigsOutputReference.property.webhookConfigId">webhookConfigId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsWebhookConfigsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsWebhookConfigs">ZeroTrustCasbPolicyActionsWebhookConfigs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsWebhookConfigsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsWebhookConfigsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `webhookConfigIdInput`<sup>Optional</sup> <a name="webhookConfigIdInput" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsWebhookConfigsOutputReference.property.webhookConfigIdInput"></a>

```java
public java.lang.String getWebhookConfigIdInput();
```

- *Type:* java.lang.String

---

##### `webhookConfigId`<sup>Required</sup> <a name="webhookConfigId" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsWebhookConfigsOutputReference.property.webhookConfigId"></a>

```java
public java.lang.String getWebhookConfigId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsWebhookConfigsOutputReference.property.internalValue"></a>

```java
public IResolvable|ZeroTrustCasbPolicyActionsWebhookConfigs getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.zeroTrustCasbPolicy.ZeroTrustCasbPolicyActionsWebhookConfigs">ZeroTrustCasbPolicyActionsWebhookConfigs</a>

---



