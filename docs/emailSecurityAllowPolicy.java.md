# `emailSecurityAllowPolicy` Submodule <a name="`emailSecurityAllowPolicy` Submodule" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EmailSecurityAllowPolicy <a name="EmailSecurityAllowPolicy" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_security_allow_policy cloudflare_email_security_allow_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.email_security_allow_policy.EmailSecurityAllowPolicy;

EmailSecurityAllowPolicy.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .accountId(java.lang.String)
    .isAcceptableSender(java.lang.Boolean|IResolvable)
    .isExemptRecipient(java.lang.Boolean|IResolvable)
    .isRegex(java.lang.Boolean|IResolvable)
    .isTrustedSender(java.lang.Boolean|IResolvable)
    .pattern(java.lang.String)
    .patternType(java.lang.String)
    .verifySender(java.lang.Boolean|IResolvable)
//  .comments(java.lang.String)
//  .isRecipient(java.lang.Boolean|IResolvable)
//  .isSender(java.lang.Boolean|IResolvable)
//  .isSpoof(java.lang.Boolean|IResolvable)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.Initializer.parameter.accountId">accountId</a></code> | <code>java.lang.String</code> | Identifier. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.Initializer.parameter.isAcceptableSender">isAcceptableSender</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Exempts messages from this sender from Spam, Spoof and Bulk dispositions only; Malicious and Suspicious dispositions still apply. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.Initializer.parameter.isExemptRecipient">isExemptRecipient</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Bypasses all detections for messages to this recipient. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.Initializer.parameter.isRegex">isRegex</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_security_allow_policy#is_regex EmailSecurityAllowPolicy#is_regex}. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.Initializer.parameter.isTrustedSender">isTrustedSender</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Bypasses all detections and link following for messages from this sender. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.Initializer.parameter.pattern">pattern</a></code> | <code>java.lang.String</code> | The pattern value to match. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.Initializer.parameter.patternType">patternType</a></code> | <code>java.lang.String</code> | Type of pattern matching. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.Initializer.parameter.verifySender">verifySender</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Enforce DMARC, SPF or DKIM authentication. When on, Email Security only honors policies that pass authentication. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.Initializer.parameter.comments">comments</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_security_allow_policy#comments EmailSecurityAllowPolicy#comments}. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.Initializer.parameter.isRecipient">isRecipient</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Deprecated as of July 1, 2025. Use `is_exempt_recipient` instead. End of life: July 1, 2026. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.Initializer.parameter.isSender">isSender</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Deprecated as of July 1, 2025. Use `is_trusted_sender` instead. End of life: July 1, 2026. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.Initializer.parameter.isSpoof">isSpoof</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Deprecated as of July 1, 2025. Use `is_acceptable_sender` instead. End of life: July 1, 2026. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.Initializer.parameter.accountId"></a>

- *Type:* java.lang.String

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_security_allow_policy#account_id EmailSecurityAllowPolicy#account_id}

---

##### `isAcceptableSender`<sup>Required</sup> <a name="isAcceptableSender" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.Initializer.parameter.isAcceptableSender"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Exempts messages from this sender from Spam, Spoof and Bulk dispositions only; Malicious and Suspicious dispositions still apply.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_security_allow_policy#is_acceptable_sender EmailSecurityAllowPolicy#is_acceptable_sender}

---

##### `isExemptRecipient`<sup>Required</sup> <a name="isExemptRecipient" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.Initializer.parameter.isExemptRecipient"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Bypasses all detections for messages to this recipient.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_security_allow_policy#is_exempt_recipient EmailSecurityAllowPolicy#is_exempt_recipient}

---

##### `isRegex`<sup>Required</sup> <a name="isRegex" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.Initializer.parameter.isRegex"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_security_allow_policy#is_regex EmailSecurityAllowPolicy#is_regex}.

---

##### `isTrustedSender`<sup>Required</sup> <a name="isTrustedSender" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.Initializer.parameter.isTrustedSender"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Bypasses all detections and link following for messages from this sender.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_security_allow_policy#is_trusted_sender EmailSecurityAllowPolicy#is_trusted_sender}

---

##### `pattern`<sup>Required</sup> <a name="pattern" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.Initializer.parameter.pattern"></a>

- *Type:* java.lang.String

The pattern value to match.

The format depends on `pattern_type`: a valid email address for EMAIL (e.g. `user@example.com`), a valid domain name for DOMAIN (e.g. `example.com`), or a plain IPv4 or IPv6 address or CIDR block for IP (e.g. `1.2.3.4`, `1.2.3.0/24`, `2606:4700:4700::1111`, or `2606:4700:4700::/48`); the API rejects private or unique-local, loopback, link-local, unspecified, and IPv4 broadcast addresses, including their IPv4-mapped IPv6 equivalents.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_security_allow_policy#pattern EmailSecurityAllowPolicy#pattern}

---

##### `patternType`<sup>Required</sup> <a name="patternType" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.Initializer.parameter.patternType"></a>

- *Type:* java.lang.String

Type of pattern matching.

* EMAIL: matches a full email address (e.g. `user@example.com`)
* DOMAIN: matches a domain name (e.g. `example.com`)
* IP: matches a plain IPv4 or IPv6 address (e.g. `1.2.3.4` or `2606:4700:4700::1111`) or CIDR block (e.g. `1.2.3.0/24` or `2606:4700:4700::/48`). The API rejects private or unique-local, loopback, link-local, unspecified, and IPv4 broadcast addresses, including their IPv4-mapped IPv6 equivalents.
* UNKNOWN: deprecated; you cannot use this when creating or updating policies, but it may appear on existing entries.
  Available values: "EMAIL", "DOMAIN", "IP", "UNKNOWN".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_security_allow_policy#pattern_type EmailSecurityAllowPolicy#pattern_type}

---

##### `verifySender`<sup>Required</sup> <a name="verifySender" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.Initializer.parameter.verifySender"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Enforce DMARC, SPF or DKIM authentication. When on, Email Security only honors policies that pass authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_security_allow_policy#verify_sender EmailSecurityAllowPolicy#verify_sender}

---

##### `comments`<sup>Optional</sup> <a name="comments" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.Initializer.parameter.comments"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_security_allow_policy#comments EmailSecurityAllowPolicy#comments}.

---

##### `isRecipient`<sup>Optional</sup> <a name="isRecipient" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.Initializer.parameter.isRecipient"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Deprecated as of July 1, 2025. Use `is_exempt_recipient` instead. End of life: July 1, 2026.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_security_allow_policy#is_recipient EmailSecurityAllowPolicy#is_recipient}

---

##### `isSender`<sup>Optional</sup> <a name="isSender" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.Initializer.parameter.isSender"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Deprecated as of July 1, 2025. Use `is_trusted_sender` instead. End of life: July 1, 2026.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_security_allow_policy#is_sender EmailSecurityAllowPolicy#is_sender}

---

##### `isSpoof`<sup>Optional</sup> <a name="isSpoof" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.Initializer.parameter.isSpoof"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Deprecated as of July 1, 2025. Use `is_acceptable_sender` instead. End of life: July 1, 2026.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_security_allow_policy#is_spoof EmailSecurityAllowPolicy#is_spoof}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.resetComments">resetComments</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.resetIsRecipient">resetIsRecipient</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.resetIsSender">resetIsSender</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.resetIsSpoof">resetIsSpoof</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetComments` <a name="resetComments" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.resetComments"></a>

```java
public void resetComments()
```

##### `resetIsRecipient` <a name="resetIsRecipient" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.resetIsRecipient"></a>

```java
public void resetIsRecipient()
```

##### `resetIsSender` <a name="resetIsSender" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.resetIsSender"></a>

```java
public void resetIsSender()
```

##### `resetIsSpoof` <a name="resetIsSpoof" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.resetIsSpoof"></a>

```java
public void resetIsSpoof()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a EmailSecurityAllowPolicy resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.isConstruct"></a>

```java
import io.cdktn.providers.cloudflare.email_security_allow_policy.EmailSecurityAllowPolicy;

EmailSecurityAllowPolicy.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.isTerraformElement"></a>

```java
import io.cdktn.providers.cloudflare.email_security_allow_policy.EmailSecurityAllowPolicy;

EmailSecurityAllowPolicy.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.isTerraformResource"></a>

```java
import io.cdktn.providers.cloudflare.email_security_allow_policy.EmailSecurityAllowPolicy;

EmailSecurityAllowPolicy.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.generateConfigForImport"></a>

```java
import io.cdktn.providers.cloudflare.email_security_allow_policy.EmailSecurityAllowPolicy;

EmailSecurityAllowPolicy.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),EmailSecurityAllowPolicy.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a EmailSecurityAllowPolicy resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the EmailSecurityAllowPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing EmailSecurityAllowPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_security_allow_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the EmailSecurityAllowPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.lastModified">lastModified</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.modifiedAt">modifiedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.accountIdInput">accountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.commentsInput">commentsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.isAcceptableSenderInput">isAcceptableSenderInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.isExemptRecipientInput">isExemptRecipientInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.isRecipientInput">isRecipientInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.isRegexInput">isRegexInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.isSenderInput">isSenderInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.isSpoofInput">isSpoofInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.isTrustedSenderInput">isTrustedSenderInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.patternInput">patternInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.patternTypeInput">patternTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.verifySenderInput">verifySenderInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.accountId">accountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.comments">comments</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.isAcceptableSender">isAcceptableSender</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.isExemptRecipient">isExemptRecipient</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.isRecipient">isRecipient</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.isRegex">isRegex</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.isSender">isSender</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.isSpoof">isSpoof</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.isTrustedSender">isTrustedSender</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.pattern">pattern</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.patternType">patternType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.verifySender">verifySender</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `lastModified`<sup>Required</sup> <a name="lastModified" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.lastModified"></a>

```java
public java.lang.String getLastModified();
```

- *Type:* java.lang.String

---

##### `modifiedAt`<sup>Required</sup> <a name="modifiedAt" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.modifiedAt"></a>

```java
public java.lang.String getModifiedAt();
```

- *Type:* java.lang.String

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.accountIdInput"></a>

```java
public java.lang.String getAccountIdInput();
```

- *Type:* java.lang.String

---

##### `commentsInput`<sup>Optional</sup> <a name="commentsInput" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.commentsInput"></a>

```java
public java.lang.String getCommentsInput();
```

- *Type:* java.lang.String

---

##### `isAcceptableSenderInput`<sup>Optional</sup> <a name="isAcceptableSenderInput" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.isAcceptableSenderInput"></a>

```java
public java.lang.Boolean|IResolvable getIsAcceptableSenderInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `isExemptRecipientInput`<sup>Optional</sup> <a name="isExemptRecipientInput" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.isExemptRecipientInput"></a>

```java
public java.lang.Boolean|IResolvable getIsExemptRecipientInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `isRecipientInput`<sup>Optional</sup> <a name="isRecipientInput" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.isRecipientInput"></a>

```java
public java.lang.Boolean|IResolvable getIsRecipientInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `isRegexInput`<sup>Optional</sup> <a name="isRegexInput" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.isRegexInput"></a>

```java
public java.lang.Boolean|IResolvable getIsRegexInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `isSenderInput`<sup>Optional</sup> <a name="isSenderInput" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.isSenderInput"></a>

```java
public java.lang.Boolean|IResolvable getIsSenderInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `isSpoofInput`<sup>Optional</sup> <a name="isSpoofInput" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.isSpoofInput"></a>

```java
public java.lang.Boolean|IResolvable getIsSpoofInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `isTrustedSenderInput`<sup>Optional</sup> <a name="isTrustedSenderInput" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.isTrustedSenderInput"></a>

```java
public java.lang.Boolean|IResolvable getIsTrustedSenderInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `patternInput`<sup>Optional</sup> <a name="patternInput" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.patternInput"></a>

```java
public java.lang.String getPatternInput();
```

- *Type:* java.lang.String

---

##### `patternTypeInput`<sup>Optional</sup> <a name="patternTypeInput" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.patternTypeInput"></a>

```java
public java.lang.String getPatternTypeInput();
```

- *Type:* java.lang.String

---

##### `verifySenderInput`<sup>Optional</sup> <a name="verifySenderInput" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.verifySenderInput"></a>

```java
public java.lang.Boolean|IResolvable getVerifySenderInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

---

##### `comments`<sup>Required</sup> <a name="comments" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.comments"></a>

```java
public java.lang.String getComments();
```

- *Type:* java.lang.String

---

##### `isAcceptableSender`<sup>Required</sup> <a name="isAcceptableSender" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.isAcceptableSender"></a>

```java
public java.lang.Boolean|IResolvable getIsAcceptableSender();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `isExemptRecipient`<sup>Required</sup> <a name="isExemptRecipient" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.isExemptRecipient"></a>

```java
public java.lang.Boolean|IResolvable getIsExemptRecipient();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `isRecipient`<sup>Required</sup> <a name="isRecipient" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.isRecipient"></a>

```java
public java.lang.Boolean|IResolvable getIsRecipient();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `isRegex`<sup>Required</sup> <a name="isRegex" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.isRegex"></a>

```java
public java.lang.Boolean|IResolvable getIsRegex();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `isSender`<sup>Required</sup> <a name="isSender" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.isSender"></a>

```java
public java.lang.Boolean|IResolvable getIsSender();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `isSpoof`<sup>Required</sup> <a name="isSpoof" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.isSpoof"></a>

```java
public java.lang.Boolean|IResolvable getIsSpoof();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `isTrustedSender`<sup>Required</sup> <a name="isTrustedSender" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.isTrustedSender"></a>

```java
public java.lang.Boolean|IResolvable getIsTrustedSender();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `pattern`<sup>Required</sup> <a name="pattern" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.pattern"></a>

```java
public java.lang.String getPattern();
```

- *Type:* java.lang.String

---

##### `patternType`<sup>Required</sup> <a name="patternType" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.patternType"></a>

```java
public java.lang.String getPatternType();
```

- *Type:* java.lang.String

---

##### `verifySender`<sup>Required</sup> <a name="verifySender" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.verifySender"></a>

```java
public java.lang.Boolean|IResolvable getVerifySender();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### EmailSecurityAllowPolicyConfig <a name="EmailSecurityAllowPolicyConfig" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicyConfig.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.email_security_allow_policy.EmailSecurityAllowPolicyConfig;

EmailSecurityAllowPolicyConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .accountId(java.lang.String)
    .isAcceptableSender(java.lang.Boolean|IResolvable)
    .isExemptRecipient(java.lang.Boolean|IResolvable)
    .isRegex(java.lang.Boolean|IResolvable)
    .isTrustedSender(java.lang.Boolean|IResolvable)
    .pattern(java.lang.String)
    .patternType(java.lang.String)
    .verifySender(java.lang.Boolean|IResolvable)
//  .comments(java.lang.String)
//  .isRecipient(java.lang.Boolean|IResolvable)
//  .isSender(java.lang.Boolean|IResolvable)
//  .isSpoof(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicyConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicyConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicyConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicyConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicyConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicyConfig.property.accountId">accountId</a></code> | <code>java.lang.String</code> | Identifier. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicyConfig.property.isAcceptableSender">isAcceptableSender</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Exempts messages from this sender from Spam, Spoof and Bulk dispositions only; Malicious and Suspicious dispositions still apply. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicyConfig.property.isExemptRecipient">isExemptRecipient</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Bypasses all detections for messages to this recipient. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicyConfig.property.isRegex">isRegex</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_security_allow_policy#is_regex EmailSecurityAllowPolicy#is_regex}. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicyConfig.property.isTrustedSender">isTrustedSender</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Bypasses all detections and link following for messages from this sender. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicyConfig.property.pattern">pattern</a></code> | <code>java.lang.String</code> | The pattern value to match. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicyConfig.property.patternType">patternType</a></code> | <code>java.lang.String</code> | Type of pattern matching. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicyConfig.property.verifySender">verifySender</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Enforce DMARC, SPF or DKIM authentication. When on, Email Security only honors policies that pass authentication. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicyConfig.property.comments">comments</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_security_allow_policy#comments EmailSecurityAllowPolicy#comments}. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicyConfig.property.isRecipient">isRecipient</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Deprecated as of July 1, 2025. Use `is_exempt_recipient` instead. End of life: July 1, 2026. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicyConfig.property.isSender">isSender</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Deprecated as of July 1, 2025. Use `is_trusted_sender` instead. End of life: July 1, 2026. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicyConfig.property.isSpoof">isSpoof</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Deprecated as of July 1, 2025. Use `is_acceptable_sender` instead. End of life: July 1, 2026. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicyConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicyConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicyConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicyConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicyConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicyConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicyConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicyConfig.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_security_allow_policy#account_id EmailSecurityAllowPolicy#account_id}

---

##### `isAcceptableSender`<sup>Required</sup> <a name="isAcceptableSender" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicyConfig.property.isAcceptableSender"></a>

```java
public java.lang.Boolean|IResolvable getIsAcceptableSender();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Exempts messages from this sender from Spam, Spoof and Bulk dispositions only; Malicious and Suspicious dispositions still apply.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_security_allow_policy#is_acceptable_sender EmailSecurityAllowPolicy#is_acceptable_sender}

---

##### `isExemptRecipient`<sup>Required</sup> <a name="isExemptRecipient" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicyConfig.property.isExemptRecipient"></a>

```java
public java.lang.Boolean|IResolvable getIsExemptRecipient();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Bypasses all detections for messages to this recipient.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_security_allow_policy#is_exempt_recipient EmailSecurityAllowPolicy#is_exempt_recipient}

---

##### `isRegex`<sup>Required</sup> <a name="isRegex" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicyConfig.property.isRegex"></a>

```java
public java.lang.Boolean|IResolvable getIsRegex();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_security_allow_policy#is_regex EmailSecurityAllowPolicy#is_regex}.

---

##### `isTrustedSender`<sup>Required</sup> <a name="isTrustedSender" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicyConfig.property.isTrustedSender"></a>

```java
public java.lang.Boolean|IResolvable getIsTrustedSender();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Bypasses all detections and link following for messages from this sender.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_security_allow_policy#is_trusted_sender EmailSecurityAllowPolicy#is_trusted_sender}

---

##### `pattern`<sup>Required</sup> <a name="pattern" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicyConfig.property.pattern"></a>

```java
public java.lang.String getPattern();
```

- *Type:* java.lang.String

The pattern value to match.

The format depends on `pattern_type`: a valid email address for EMAIL (e.g. `user@example.com`), a valid domain name for DOMAIN (e.g. `example.com`), or a plain IPv4 or IPv6 address or CIDR block for IP (e.g. `1.2.3.4`, `1.2.3.0/24`, `2606:4700:4700::1111`, or `2606:4700:4700::/48`); the API rejects private or unique-local, loopback, link-local, unspecified, and IPv4 broadcast addresses, including their IPv4-mapped IPv6 equivalents.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_security_allow_policy#pattern EmailSecurityAllowPolicy#pattern}

---

##### `patternType`<sup>Required</sup> <a name="patternType" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicyConfig.property.patternType"></a>

```java
public java.lang.String getPatternType();
```

- *Type:* java.lang.String

Type of pattern matching.

* EMAIL: matches a full email address (e.g. `user@example.com`)
* DOMAIN: matches a domain name (e.g. `example.com`)
* IP: matches a plain IPv4 or IPv6 address (e.g. `1.2.3.4` or `2606:4700:4700::1111`) or CIDR block (e.g. `1.2.3.0/24` or `2606:4700:4700::/48`). The API rejects private or unique-local, loopback, link-local, unspecified, and IPv4 broadcast addresses, including their IPv4-mapped IPv6 equivalents.
* UNKNOWN: deprecated; you cannot use this when creating or updating policies, but it may appear on existing entries.
  Available values: "EMAIL", "DOMAIN", "IP", "UNKNOWN".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_security_allow_policy#pattern_type EmailSecurityAllowPolicy#pattern_type}

---

##### `verifySender`<sup>Required</sup> <a name="verifySender" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicyConfig.property.verifySender"></a>

```java
public java.lang.Boolean|IResolvable getVerifySender();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Enforce DMARC, SPF or DKIM authentication. When on, Email Security only honors policies that pass authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_security_allow_policy#verify_sender EmailSecurityAllowPolicy#verify_sender}

---

##### `comments`<sup>Optional</sup> <a name="comments" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicyConfig.property.comments"></a>

```java
public java.lang.String getComments();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_security_allow_policy#comments EmailSecurityAllowPolicy#comments}.

---

##### `isRecipient`<sup>Optional</sup> <a name="isRecipient" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicyConfig.property.isRecipient"></a>

```java
public java.lang.Boolean|IResolvable getIsRecipient();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Deprecated as of July 1, 2025. Use `is_exempt_recipient` instead. End of life: July 1, 2026.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_security_allow_policy#is_recipient EmailSecurityAllowPolicy#is_recipient}

---

##### `isSender`<sup>Optional</sup> <a name="isSender" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicyConfig.property.isSender"></a>

```java
public java.lang.Boolean|IResolvable getIsSender();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Deprecated as of July 1, 2025. Use `is_trusted_sender` instead. End of life: July 1, 2026.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_security_allow_policy#is_sender EmailSecurityAllowPolicy#is_sender}

---

##### `isSpoof`<sup>Optional</sup> <a name="isSpoof" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicyConfig.property.isSpoof"></a>

```java
public java.lang.Boolean|IResolvable getIsSpoof();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Deprecated as of July 1, 2025. Use `is_acceptable_sender` instead. End of life: July 1, 2026.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_security_allow_policy#is_spoof EmailSecurityAllowPolicy#is_spoof}

---



