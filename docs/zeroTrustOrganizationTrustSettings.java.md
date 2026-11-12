# `zeroTrustOrganizationTrustSettings` Submodule <a name="`zeroTrustOrganizationTrustSettings` Submodule" id="@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ZeroTrustOrganizationTrustSettings <a name="ZeroTrustOrganizationTrustSettings" id="@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_organization_trust_settings cloudflare_zero_trust_organization_trust_settings}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.zero_trust_organization_trust_settings.ZeroTrustOrganizationTrustSettings;

ZeroTrustOrganizationTrustSettings.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .accountId(java.lang.String)
    .grantTrustToAllAccountsInOrg(java.lang.Boolean|IResolvable)
//  .trustingAccounts(java.util.List<java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.Initializer.parameter.accountId">accountId</a></code> | <code>java.lang.String</code> | Identifier. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.Initializer.parameter.grantTrustToAllAccountsInOrg">grantTrustToAllAccountsInOrg</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether all accounts in the organization are trusted to use this account's cross-account Access resources. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.Initializer.parameter.trustingAccounts">trustingAccounts</a></code> | <code>java.util.List<java.lang.String></code> | Explicit account IDs trusted to use this account's cross-account Access resources. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.Initializer.parameter.accountId"></a>

- *Type:* java.lang.String

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_organization_trust_settings#account_id ZeroTrustOrganizationTrustSettings#account_id}

---

##### `grantTrustToAllAccountsInOrg`<sup>Required</sup> <a name="grantTrustToAllAccountsInOrg" id="@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.Initializer.parameter.grantTrustToAllAccountsInOrg"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether all accounts in the organization are trusted to use this account's cross-account Access resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_organization_trust_settings#grant_trust_to_all_accounts_in_org ZeroTrustOrganizationTrustSettings#grant_trust_to_all_accounts_in_org}

---

##### `trustingAccounts`<sup>Optional</sup> <a name="trustingAccounts" id="@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.Initializer.parameter.trustingAccounts"></a>

- *Type:* java.util.List<java.lang.String>

Explicit account IDs trusted to use this account's cross-account Access resources.

At most 100 unique valid account IDs are accepted. Omitted from responses when empty.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_organization_trust_settings#trusting_accounts ZeroTrustOrganizationTrustSettings#trusting_accounts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.resetTrustingAccounts">resetTrustingAccounts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetTrustingAccounts` <a name="resetTrustingAccounts" id="@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.resetTrustingAccounts"></a>

```java
public void resetTrustingAccounts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ZeroTrustOrganizationTrustSettings resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.isConstruct"></a>

```java
import io.cdktn.providers.cloudflare.zero_trust_organization_trust_settings.ZeroTrustOrganizationTrustSettings;

ZeroTrustOrganizationTrustSettings.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.isTerraformElement"></a>

```java
import io.cdktn.providers.cloudflare.zero_trust_organization_trust_settings.ZeroTrustOrganizationTrustSettings;

ZeroTrustOrganizationTrustSettings.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.isTerraformResource"></a>

```java
import io.cdktn.providers.cloudflare.zero_trust_organization_trust_settings.ZeroTrustOrganizationTrustSettings;

ZeroTrustOrganizationTrustSettings.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.generateConfigForImport"></a>

```java
import io.cdktn.providers.cloudflare.zero_trust_organization_trust_settings.ZeroTrustOrganizationTrustSettings;

ZeroTrustOrganizationTrustSettings.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ZeroTrustOrganizationTrustSettings.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a ZeroTrustOrganizationTrustSettings resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ZeroTrustOrganizationTrustSettings to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ZeroTrustOrganizationTrustSettings that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_organization_trust_settings#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the ZeroTrustOrganizationTrustSettings to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.property.accountIdInput">accountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.property.grantTrustToAllAccountsInOrgInput">grantTrustToAllAccountsInOrgInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.property.trustingAccountsInput">trustingAccountsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.property.accountId">accountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.property.grantTrustToAllAccountsInOrg">grantTrustToAllAccountsInOrg</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.property.trustingAccounts">trustingAccounts</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.property.accountIdInput"></a>

```java
public java.lang.String getAccountIdInput();
```

- *Type:* java.lang.String

---

##### `grantTrustToAllAccountsInOrgInput`<sup>Optional</sup> <a name="grantTrustToAllAccountsInOrgInput" id="@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.property.grantTrustToAllAccountsInOrgInput"></a>

```java
public java.lang.Boolean|IResolvable getGrantTrustToAllAccountsInOrgInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `trustingAccountsInput`<sup>Optional</sup> <a name="trustingAccountsInput" id="@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.property.trustingAccountsInput"></a>

```java
public java.util.List<java.lang.String> getTrustingAccountsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

---

##### `grantTrustToAllAccountsInOrg`<sup>Required</sup> <a name="grantTrustToAllAccountsInOrg" id="@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.property.grantTrustToAllAccountsInOrg"></a>

```java
public java.lang.Boolean|IResolvable getGrantTrustToAllAccountsInOrg();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `trustingAccounts`<sup>Required</sup> <a name="trustingAccounts" id="@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.property.trustingAccounts"></a>

```java
public java.util.List<java.lang.String> getTrustingAccounts();
```

- *Type:* java.util.List<java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettings.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ZeroTrustOrganizationTrustSettingsConfig <a name="ZeroTrustOrganizationTrustSettingsConfig" id="@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettingsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettingsConfig.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.zero_trust_organization_trust_settings.ZeroTrustOrganizationTrustSettingsConfig;

ZeroTrustOrganizationTrustSettingsConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .accountId(java.lang.String)
    .grantTrustToAllAccountsInOrg(java.lang.Boolean|IResolvable)
//  .trustingAccounts(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettingsConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettingsConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettingsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettingsConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettingsConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettingsConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettingsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettingsConfig.property.accountId">accountId</a></code> | <code>java.lang.String</code> | Identifier. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettingsConfig.property.grantTrustToAllAccountsInOrg">grantTrustToAllAccountsInOrg</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether all accounts in the organization are trusted to use this account's cross-account Access resources. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettingsConfig.property.trustingAccounts">trustingAccounts</a></code> | <code>java.util.List<java.lang.String></code> | Explicit account IDs trusted to use this account's cross-account Access resources. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettingsConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettingsConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettingsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettingsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettingsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettingsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettingsConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettingsConfig.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_organization_trust_settings#account_id ZeroTrustOrganizationTrustSettings#account_id}

---

##### `grantTrustToAllAccountsInOrg`<sup>Required</sup> <a name="grantTrustToAllAccountsInOrg" id="@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettingsConfig.property.grantTrustToAllAccountsInOrg"></a>

```java
public java.lang.Boolean|IResolvable getGrantTrustToAllAccountsInOrg();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether all accounts in the organization are trusted to use this account's cross-account Access resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_organization_trust_settings#grant_trust_to_all_accounts_in_org ZeroTrustOrganizationTrustSettings#grant_trust_to_all_accounts_in_org}

---

##### `trustingAccounts`<sup>Optional</sup> <a name="trustingAccounts" id="@cdktn/provider-cloudflare.zeroTrustOrganizationTrustSettings.ZeroTrustOrganizationTrustSettingsConfig.property.trustingAccounts"></a>

```java
public java.util.List<java.lang.String> getTrustingAccounts();
```

- *Type:* java.util.List<java.lang.String>

Explicit account IDs trusted to use this account's cross-account Access resources.

At most 100 unique valid account IDs are accepted. Omitted from responses when empty.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_organization_trust_settings#trusting_accounts ZeroTrustOrganizationTrustSettings#trusting_accounts}

---



