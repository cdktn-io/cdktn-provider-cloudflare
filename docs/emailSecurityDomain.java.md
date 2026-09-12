# `emailSecurityDomain` Submodule <a name="`emailSecurityDomain` Submodule" id="@cdktn/provider-cloudflare.emailSecurityDomain"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EmailSecurityDomain <a name="EmailSecurityDomain" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_security_domain cloudflare_email_security_domain}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.email_security_domain.EmailSecurityDomain;

EmailSecurityDomain.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .accountId(java.lang.String)
    .allowedDeliveryModes(java.util.List<java.lang.String>)
    .domain(java.lang.String)
    .dropDispositions(java.util.List<java.lang.String>)
    .ipRestrictions(java.util.List<java.lang.String>)
    .regions(java.util.List<java.lang.String>)
//  .folder(java.lang.String)
//  .integrationId(java.lang.String)
//  .lookbackHops(java.lang.Number)
//  .requireTlsInbound(java.lang.Boolean|IResolvable)
//  .requireTlsOutbound(java.lang.Boolean|IResolvable)
//  .transport(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.Initializer.parameter.accountId">accountId</a></code> | <code>java.lang.String</code> | Identifier. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.Initializer.parameter.allowedDeliveryModes">allowedDeliveryModes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_security_domain#allowed_delivery_modes EmailSecurityDomain#allowed_delivery_modes}. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.Initializer.parameter.domain">domain</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_security_domain#domain EmailSecurityDomain#domain}. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.Initializer.parameter.dropDispositions">dropDispositions</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_security_domain#drop_dispositions EmailSecurityDomain#drop_dispositions}. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.Initializer.parameter.ipRestrictions">ipRestrictions</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_security_domain#ip_restrictions EmailSecurityDomain#ip_restrictions}. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.Initializer.parameter.regions">regions</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_security_domain#regions EmailSecurityDomain#regions}. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.Initializer.parameter.folder">folder</a></code> | <code>java.lang.String</code> | Available values: "AllItems", "Inbox". |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.Initializer.parameter.integrationId">integrationId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_security_domain#integration_id EmailSecurityDomain#integration_id}. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.Initializer.parameter.lookbackHops">lookbackHops</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_security_domain#lookback_hops EmailSecurityDomain#lookback_hops}. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.Initializer.parameter.requireTlsInbound">requireTlsInbound</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_security_domain#require_tls_inbound EmailSecurityDomain#require_tls_inbound}. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.Initializer.parameter.requireTlsOutbound">requireTlsOutbound</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_security_domain#require_tls_outbound EmailSecurityDomain#require_tls_outbound}. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.Initializer.parameter.transport">transport</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_security_domain#transport EmailSecurityDomain#transport}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.Initializer.parameter.accountId"></a>

- *Type:* java.lang.String

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_security_domain#account_id EmailSecurityDomain#account_id}

---

##### `allowedDeliveryModes`<sup>Required</sup> <a name="allowedDeliveryModes" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.Initializer.parameter.allowedDeliveryModes"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_security_domain#allowed_delivery_modes EmailSecurityDomain#allowed_delivery_modes}.

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.Initializer.parameter.domain"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_security_domain#domain EmailSecurityDomain#domain}.

---

##### `dropDispositions`<sup>Required</sup> <a name="dropDispositions" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.Initializer.parameter.dropDispositions"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_security_domain#drop_dispositions EmailSecurityDomain#drop_dispositions}.

---

##### `ipRestrictions`<sup>Required</sup> <a name="ipRestrictions" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.Initializer.parameter.ipRestrictions"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_security_domain#ip_restrictions EmailSecurityDomain#ip_restrictions}.

---

##### `regions`<sup>Required</sup> <a name="regions" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.Initializer.parameter.regions"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_security_domain#regions EmailSecurityDomain#regions}.

---

##### `folder`<sup>Optional</sup> <a name="folder" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.Initializer.parameter.folder"></a>

- *Type:* java.lang.String

Available values: "AllItems", "Inbox".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_security_domain#folder EmailSecurityDomain#folder}

---

##### `integrationId`<sup>Optional</sup> <a name="integrationId" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.Initializer.parameter.integrationId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_security_domain#integration_id EmailSecurityDomain#integration_id}.

---

##### `lookbackHops`<sup>Optional</sup> <a name="lookbackHops" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.Initializer.parameter.lookbackHops"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_security_domain#lookback_hops EmailSecurityDomain#lookback_hops}.

---

##### `requireTlsInbound`<sup>Optional</sup> <a name="requireTlsInbound" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.Initializer.parameter.requireTlsInbound"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_security_domain#require_tls_inbound EmailSecurityDomain#require_tls_inbound}.

---

##### `requireTlsOutbound`<sup>Optional</sup> <a name="requireTlsOutbound" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.Initializer.parameter.requireTlsOutbound"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_security_domain#require_tls_outbound EmailSecurityDomain#require_tls_outbound}.

---

##### `transport`<sup>Optional</sup> <a name="transport" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.Initializer.parameter.transport"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_security_domain#transport EmailSecurityDomain#transport}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.resetFolder">resetFolder</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.resetIntegrationId">resetIntegrationId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.resetLookbackHops">resetLookbackHops</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.resetRequireTlsInbound">resetRequireTlsInbound</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.resetRequireTlsOutbound">resetRequireTlsOutbound</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.resetTransport">resetTransport</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetFolder` <a name="resetFolder" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.resetFolder"></a>

```java
public void resetFolder()
```

##### `resetIntegrationId` <a name="resetIntegrationId" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.resetIntegrationId"></a>

```java
public void resetIntegrationId()
```

##### `resetLookbackHops` <a name="resetLookbackHops" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.resetLookbackHops"></a>

```java
public void resetLookbackHops()
```

##### `resetRequireTlsInbound` <a name="resetRequireTlsInbound" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.resetRequireTlsInbound"></a>

```java
public void resetRequireTlsInbound()
```

##### `resetRequireTlsOutbound` <a name="resetRequireTlsOutbound" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.resetRequireTlsOutbound"></a>

```java
public void resetRequireTlsOutbound()
```

##### `resetTransport` <a name="resetTransport" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.resetTransport"></a>

```java
public void resetTransport()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a EmailSecurityDomain resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.isConstruct"></a>

```java
import io.cdktn.providers.cloudflare.email_security_domain.EmailSecurityDomain;

EmailSecurityDomain.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.isTerraformElement"></a>

```java
import io.cdktn.providers.cloudflare.email_security_domain.EmailSecurityDomain;

EmailSecurityDomain.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.isTerraformResource"></a>

```java
import io.cdktn.providers.cloudflare.email_security_domain.EmailSecurityDomain;

EmailSecurityDomain.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.generateConfigForImport"></a>

```java
import io.cdktn.providers.cloudflare.email_security_domain.EmailSecurityDomain;

EmailSecurityDomain.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),EmailSecurityDomain.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a EmailSecurityDomain resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the EmailSecurityDomain to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing EmailSecurityDomain that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_security_domain#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the EmailSecurityDomain to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.authorization">authorization</a></code> | <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainAuthorizationOutputReference">EmailSecurityDomainAuthorizationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.dmarcStatus">dmarcStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.emailsProcessed">emailsProcessed</a></code> | <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainEmailsProcessedOutputReference">EmailSecurityDomainEmailsProcessedOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.inboxProvider">inboxProvider</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.lastModified">lastModified</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.modifiedAt">modifiedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.o365TenantId">o365TenantId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.spfStatus">spfStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.accountIdInput">accountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.allowedDeliveryModesInput">allowedDeliveryModesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.domainInput">domainInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.dropDispositionsInput">dropDispositionsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.folderInput">folderInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.integrationIdInput">integrationIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.ipRestrictionsInput">ipRestrictionsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.lookbackHopsInput">lookbackHopsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.regionsInput">regionsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.requireTlsInboundInput">requireTlsInboundInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.requireTlsOutboundInput">requireTlsOutboundInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.transportInput">transportInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.accountId">accountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.allowedDeliveryModes">allowedDeliveryModes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.domain">domain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.dropDispositions">dropDispositions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.folder">folder</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.integrationId">integrationId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.ipRestrictions">ipRestrictions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.lookbackHops">lookbackHops</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.regions">regions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.requireTlsInbound">requireTlsInbound</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.requireTlsOutbound">requireTlsOutbound</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.transport">transport</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.authorization"></a>

```java
public EmailSecurityDomainAuthorizationOutputReference getAuthorization();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainAuthorizationOutputReference">EmailSecurityDomainAuthorizationOutputReference</a>

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `dmarcStatus`<sup>Required</sup> <a name="dmarcStatus" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.dmarcStatus"></a>

```java
public java.lang.String getDmarcStatus();
```

- *Type:* java.lang.String

---

##### `emailsProcessed`<sup>Required</sup> <a name="emailsProcessed" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.emailsProcessed"></a>

```java
public EmailSecurityDomainEmailsProcessedOutputReference getEmailsProcessed();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainEmailsProcessedOutputReference">EmailSecurityDomainEmailsProcessedOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `inboxProvider`<sup>Required</sup> <a name="inboxProvider" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.inboxProvider"></a>

```java
public java.lang.String getInboxProvider();
```

- *Type:* java.lang.String

---

##### `lastModified`<sup>Required</sup> <a name="lastModified" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.lastModified"></a>

```java
public java.lang.String getLastModified();
```

- *Type:* java.lang.String

---

##### `modifiedAt`<sup>Required</sup> <a name="modifiedAt" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.modifiedAt"></a>

```java
public java.lang.String getModifiedAt();
```

- *Type:* java.lang.String

---

##### `o365TenantId`<sup>Required</sup> <a name="o365TenantId" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.o365TenantId"></a>

```java
public java.lang.String getO365TenantId();
```

- *Type:* java.lang.String

---

##### `spfStatus`<sup>Required</sup> <a name="spfStatus" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.spfStatus"></a>

```java
public java.lang.String getSpfStatus();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.accountIdInput"></a>

```java
public java.lang.String getAccountIdInput();
```

- *Type:* java.lang.String

---

##### `allowedDeliveryModesInput`<sup>Optional</sup> <a name="allowedDeliveryModesInput" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.allowedDeliveryModesInput"></a>

```java
public java.util.List<java.lang.String> getAllowedDeliveryModesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `domainInput`<sup>Optional</sup> <a name="domainInput" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.domainInput"></a>

```java
public java.lang.String getDomainInput();
```

- *Type:* java.lang.String

---

##### `dropDispositionsInput`<sup>Optional</sup> <a name="dropDispositionsInput" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.dropDispositionsInput"></a>

```java
public java.util.List<java.lang.String> getDropDispositionsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `folderInput`<sup>Optional</sup> <a name="folderInput" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.folderInput"></a>

```java
public java.lang.String getFolderInput();
```

- *Type:* java.lang.String

---

##### `integrationIdInput`<sup>Optional</sup> <a name="integrationIdInput" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.integrationIdInput"></a>

```java
public java.lang.String getIntegrationIdInput();
```

- *Type:* java.lang.String

---

##### `ipRestrictionsInput`<sup>Optional</sup> <a name="ipRestrictionsInput" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.ipRestrictionsInput"></a>

```java
public java.util.List<java.lang.String> getIpRestrictionsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `lookbackHopsInput`<sup>Optional</sup> <a name="lookbackHopsInput" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.lookbackHopsInput"></a>

```java
public java.lang.Number getLookbackHopsInput();
```

- *Type:* java.lang.Number

---

##### `regionsInput`<sup>Optional</sup> <a name="regionsInput" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.regionsInput"></a>

```java
public java.util.List<java.lang.String> getRegionsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `requireTlsInboundInput`<sup>Optional</sup> <a name="requireTlsInboundInput" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.requireTlsInboundInput"></a>

```java
public java.lang.Boolean|IResolvable getRequireTlsInboundInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `requireTlsOutboundInput`<sup>Optional</sup> <a name="requireTlsOutboundInput" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.requireTlsOutboundInput"></a>

```java
public java.lang.Boolean|IResolvable getRequireTlsOutboundInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `transportInput`<sup>Optional</sup> <a name="transportInput" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.transportInput"></a>

```java
public java.lang.String getTransportInput();
```

- *Type:* java.lang.String

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

---

##### `allowedDeliveryModes`<sup>Required</sup> <a name="allowedDeliveryModes" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.allowedDeliveryModes"></a>

```java
public java.util.List<java.lang.String> getAllowedDeliveryModes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.domain"></a>

```java
public java.lang.String getDomain();
```

- *Type:* java.lang.String

---

##### `dropDispositions`<sup>Required</sup> <a name="dropDispositions" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.dropDispositions"></a>

```java
public java.util.List<java.lang.String> getDropDispositions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `folder`<sup>Required</sup> <a name="folder" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.folder"></a>

```java
public java.lang.String getFolder();
```

- *Type:* java.lang.String

---

##### `integrationId`<sup>Required</sup> <a name="integrationId" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.integrationId"></a>

```java
public java.lang.String getIntegrationId();
```

- *Type:* java.lang.String

---

##### `ipRestrictions`<sup>Required</sup> <a name="ipRestrictions" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.ipRestrictions"></a>

```java
public java.util.List<java.lang.String> getIpRestrictions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `lookbackHops`<sup>Required</sup> <a name="lookbackHops" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.lookbackHops"></a>

```java
public java.lang.Number getLookbackHops();
```

- *Type:* java.lang.Number

---

##### `regions`<sup>Required</sup> <a name="regions" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.regions"></a>

```java
public java.util.List<java.lang.String> getRegions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `requireTlsInbound`<sup>Required</sup> <a name="requireTlsInbound" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.requireTlsInbound"></a>

```java
public java.lang.Boolean|IResolvable getRequireTlsInbound();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `requireTlsOutbound`<sup>Required</sup> <a name="requireTlsOutbound" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.requireTlsOutbound"></a>

```java
public java.lang.Boolean|IResolvable getRequireTlsOutbound();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `transport`<sup>Required</sup> <a name="transport" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.transport"></a>

```java
public java.lang.String getTransport();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### EmailSecurityDomainAuthorization <a name="EmailSecurityDomainAuthorization" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainAuthorization"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainAuthorization.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.email_security_domain.EmailSecurityDomainAuthorization;

EmailSecurityDomainAuthorization.builder()
    .build();
```


### EmailSecurityDomainConfig <a name="EmailSecurityDomainConfig" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainConfig.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.email_security_domain.EmailSecurityDomainConfig;

EmailSecurityDomainConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .accountId(java.lang.String)
    .allowedDeliveryModes(java.util.List<java.lang.String>)
    .domain(java.lang.String)
    .dropDispositions(java.util.List<java.lang.String>)
    .ipRestrictions(java.util.List<java.lang.String>)
    .regions(java.util.List<java.lang.String>)
//  .folder(java.lang.String)
//  .integrationId(java.lang.String)
//  .lookbackHops(java.lang.Number)
//  .requireTlsInbound(java.lang.Boolean|IResolvable)
//  .requireTlsOutbound(java.lang.Boolean|IResolvable)
//  .transport(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainConfig.property.accountId">accountId</a></code> | <code>java.lang.String</code> | Identifier. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainConfig.property.allowedDeliveryModes">allowedDeliveryModes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_security_domain#allowed_delivery_modes EmailSecurityDomain#allowed_delivery_modes}. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainConfig.property.domain">domain</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_security_domain#domain EmailSecurityDomain#domain}. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainConfig.property.dropDispositions">dropDispositions</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_security_domain#drop_dispositions EmailSecurityDomain#drop_dispositions}. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainConfig.property.ipRestrictions">ipRestrictions</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_security_domain#ip_restrictions EmailSecurityDomain#ip_restrictions}. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainConfig.property.regions">regions</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_security_domain#regions EmailSecurityDomain#regions}. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainConfig.property.folder">folder</a></code> | <code>java.lang.String</code> | Available values: "AllItems", "Inbox". |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainConfig.property.integrationId">integrationId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_security_domain#integration_id EmailSecurityDomain#integration_id}. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainConfig.property.lookbackHops">lookbackHops</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_security_domain#lookback_hops EmailSecurityDomain#lookback_hops}. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainConfig.property.requireTlsInbound">requireTlsInbound</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_security_domain#require_tls_inbound EmailSecurityDomain#require_tls_inbound}. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainConfig.property.requireTlsOutbound">requireTlsOutbound</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_security_domain#require_tls_outbound EmailSecurityDomain#require_tls_outbound}. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainConfig.property.transport">transport</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_security_domain#transport EmailSecurityDomain#transport}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainConfig.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_security_domain#account_id EmailSecurityDomain#account_id}

---

##### `allowedDeliveryModes`<sup>Required</sup> <a name="allowedDeliveryModes" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainConfig.property.allowedDeliveryModes"></a>

```java
public java.util.List<java.lang.String> getAllowedDeliveryModes();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_security_domain#allowed_delivery_modes EmailSecurityDomain#allowed_delivery_modes}.

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainConfig.property.domain"></a>

```java
public java.lang.String getDomain();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_security_domain#domain EmailSecurityDomain#domain}.

---

##### `dropDispositions`<sup>Required</sup> <a name="dropDispositions" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainConfig.property.dropDispositions"></a>

```java
public java.util.List<java.lang.String> getDropDispositions();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_security_domain#drop_dispositions EmailSecurityDomain#drop_dispositions}.

---

##### `ipRestrictions`<sup>Required</sup> <a name="ipRestrictions" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainConfig.property.ipRestrictions"></a>

```java
public java.util.List<java.lang.String> getIpRestrictions();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_security_domain#ip_restrictions EmailSecurityDomain#ip_restrictions}.

---

##### `regions`<sup>Required</sup> <a name="regions" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainConfig.property.regions"></a>

```java
public java.util.List<java.lang.String> getRegions();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_security_domain#regions EmailSecurityDomain#regions}.

---

##### `folder`<sup>Optional</sup> <a name="folder" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainConfig.property.folder"></a>

```java
public java.lang.String getFolder();
```

- *Type:* java.lang.String

Available values: "AllItems", "Inbox".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_security_domain#folder EmailSecurityDomain#folder}

---

##### `integrationId`<sup>Optional</sup> <a name="integrationId" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainConfig.property.integrationId"></a>

```java
public java.lang.String getIntegrationId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_security_domain#integration_id EmailSecurityDomain#integration_id}.

---

##### `lookbackHops`<sup>Optional</sup> <a name="lookbackHops" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainConfig.property.lookbackHops"></a>

```java
public java.lang.Number getLookbackHops();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_security_domain#lookback_hops EmailSecurityDomain#lookback_hops}.

---

##### `requireTlsInbound`<sup>Optional</sup> <a name="requireTlsInbound" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainConfig.property.requireTlsInbound"></a>

```java
public java.lang.Boolean|IResolvable getRequireTlsInbound();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_security_domain#require_tls_inbound EmailSecurityDomain#require_tls_inbound}.

---

##### `requireTlsOutbound`<sup>Optional</sup> <a name="requireTlsOutbound" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainConfig.property.requireTlsOutbound"></a>

```java
public java.lang.Boolean|IResolvable getRequireTlsOutbound();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_security_domain#require_tls_outbound EmailSecurityDomain#require_tls_outbound}.

---

##### `transport`<sup>Optional</sup> <a name="transport" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainConfig.property.transport"></a>

```java
public java.lang.String getTransport();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_security_domain#transport EmailSecurityDomain#transport}.

---

### EmailSecurityDomainEmailsProcessed <a name="EmailSecurityDomainEmailsProcessed" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainEmailsProcessed"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainEmailsProcessed.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.email_security_domain.EmailSecurityDomainEmailsProcessed;

EmailSecurityDomainEmailsProcessed.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### EmailSecurityDomainAuthorizationOutputReference <a name="EmailSecurityDomainAuthorizationOutputReference" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainAuthorizationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainAuthorizationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.email_security_domain.EmailSecurityDomainAuthorizationOutputReference;

new EmailSecurityDomainAuthorizationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainAuthorizationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainAuthorizationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainAuthorizationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainAuthorizationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainAuthorizationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainAuthorizationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainAuthorizationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainAuthorizationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainAuthorizationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainAuthorizationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainAuthorizationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainAuthorizationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainAuthorizationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainAuthorizationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainAuthorizationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainAuthorizationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainAuthorizationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainAuthorizationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainAuthorizationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainAuthorizationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainAuthorizationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainAuthorizationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainAuthorizationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainAuthorizationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainAuthorizationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainAuthorizationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainAuthorizationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainAuthorizationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainAuthorizationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainAuthorizationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainAuthorizationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainAuthorizationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainAuthorizationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainAuthorizationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainAuthorizationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainAuthorizationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainAuthorizationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainAuthorizationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainAuthorizationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainAuthorizationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainAuthorizationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainAuthorizationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainAuthorizationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainAuthorizationOutputReference.property.authorized">authorized</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainAuthorizationOutputReference.property.statusMessage">statusMessage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainAuthorizationOutputReference.property.timestamp">timestamp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainAuthorizationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainAuthorization">EmailSecurityDomainAuthorization</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainAuthorizationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainAuthorizationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `authorized`<sup>Required</sup> <a name="authorized" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainAuthorizationOutputReference.property.authorized"></a>

```java
public IResolvable getAuthorized();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `statusMessage`<sup>Required</sup> <a name="statusMessage" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainAuthorizationOutputReference.property.statusMessage"></a>

```java
public java.lang.String getStatusMessage();
```

- *Type:* java.lang.String

---

##### `timestamp`<sup>Required</sup> <a name="timestamp" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainAuthorizationOutputReference.property.timestamp"></a>

```java
public java.lang.String getTimestamp();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainAuthorizationOutputReference.property.internalValue"></a>

```java
public EmailSecurityDomainAuthorization getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainAuthorization">EmailSecurityDomainAuthorization</a>

---


### EmailSecurityDomainEmailsProcessedOutputReference <a name="EmailSecurityDomainEmailsProcessedOutputReference" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainEmailsProcessedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainEmailsProcessedOutputReference.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.email_security_domain.EmailSecurityDomainEmailsProcessedOutputReference;

new EmailSecurityDomainEmailsProcessedOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainEmailsProcessedOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainEmailsProcessedOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainEmailsProcessedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainEmailsProcessedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainEmailsProcessedOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainEmailsProcessedOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainEmailsProcessedOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainEmailsProcessedOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainEmailsProcessedOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainEmailsProcessedOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainEmailsProcessedOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainEmailsProcessedOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainEmailsProcessedOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainEmailsProcessedOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainEmailsProcessedOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainEmailsProcessedOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainEmailsProcessedOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainEmailsProcessedOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainEmailsProcessedOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainEmailsProcessedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainEmailsProcessedOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainEmailsProcessedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainEmailsProcessedOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainEmailsProcessedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainEmailsProcessedOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainEmailsProcessedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainEmailsProcessedOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainEmailsProcessedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainEmailsProcessedOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainEmailsProcessedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainEmailsProcessedOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainEmailsProcessedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainEmailsProcessedOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainEmailsProcessedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainEmailsProcessedOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainEmailsProcessedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainEmailsProcessedOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainEmailsProcessedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainEmailsProcessedOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainEmailsProcessedOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainEmailsProcessedOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainEmailsProcessedOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainEmailsProcessedOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainEmailsProcessedOutputReference.property.timestamp">timestamp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainEmailsProcessedOutputReference.property.totalEmailsProcessed">totalEmailsProcessed</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainEmailsProcessedOutputReference.property.totalEmailsProcessedPrevious">totalEmailsProcessedPrevious</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainEmailsProcessedOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainEmailsProcessed">EmailSecurityDomainEmailsProcessed</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainEmailsProcessedOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainEmailsProcessedOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `timestamp`<sup>Required</sup> <a name="timestamp" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainEmailsProcessedOutputReference.property.timestamp"></a>

```java
public java.lang.String getTimestamp();
```

- *Type:* java.lang.String

---

##### `totalEmailsProcessed`<sup>Required</sup> <a name="totalEmailsProcessed" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainEmailsProcessedOutputReference.property.totalEmailsProcessed"></a>

```java
public java.lang.Number getTotalEmailsProcessed();
```

- *Type:* java.lang.Number

---

##### `totalEmailsProcessedPrevious`<sup>Required</sup> <a name="totalEmailsProcessedPrevious" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainEmailsProcessedOutputReference.property.totalEmailsProcessedPrevious"></a>

```java
public java.lang.Number getTotalEmailsProcessedPrevious();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainEmailsProcessedOutputReference.property.internalValue"></a>

```java
public EmailSecurityDomainEmailsProcessed getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainEmailsProcessed">EmailSecurityDomainEmailsProcessed</a>

---



