# `emailSecurityAllowPolicy` Submodule <a name="`emailSecurityAllowPolicy` Submodule" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EmailSecurityAllowPolicy <a name="EmailSecurityAllowPolicy" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_security_allow_policy cloudflare_email_security_allow_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new EmailSecurityAllowPolicy(Construct Scope, string Id, EmailSecurityAllowPolicyConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicyConfig">EmailSecurityAllowPolicyConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicyConfig">EmailSecurityAllowPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.resetComments">ResetComments</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.resetIsRecipient">ResetIsRecipient</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.resetIsSender">ResetIsSender</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.resetIsSpoof">ResetIsSpoof</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetComments` <a name="ResetComments" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.resetComments"></a>

```csharp
private void ResetComments()
```

##### `ResetIsRecipient` <a name="ResetIsRecipient" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.resetIsRecipient"></a>

```csharp
private void ResetIsRecipient()
```

##### `ResetIsSender` <a name="ResetIsSender" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.resetIsSender"></a>

```csharp
private void ResetIsSender()
```

##### `ResetIsSpoof` <a name="ResetIsSpoof" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.resetIsSpoof"></a>

```csharp
private void ResetIsSpoof()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a EmailSecurityAllowPolicy resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

EmailSecurityAllowPolicy.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

EmailSecurityAllowPolicy.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

EmailSecurityAllowPolicy.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

EmailSecurityAllowPolicy.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a EmailSecurityAllowPolicy resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the EmailSecurityAllowPolicy to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing EmailSecurityAllowPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_security_allow_policy#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the EmailSecurityAllowPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.lastModified">LastModified</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.modifiedAt">ModifiedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.accountIdInput">AccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.commentsInput">CommentsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.isAcceptableSenderInput">IsAcceptableSenderInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.isExemptRecipientInput">IsExemptRecipientInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.isRecipientInput">IsRecipientInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.isRegexInput">IsRegexInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.isSenderInput">IsSenderInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.isSpoofInput">IsSpoofInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.isTrustedSenderInput">IsTrustedSenderInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.patternInput">PatternInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.patternTypeInput">PatternTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.verifySenderInput">VerifySenderInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.accountId">AccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.comments">Comments</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.isAcceptableSender">IsAcceptableSender</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.isExemptRecipient">IsExemptRecipient</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.isRecipient">IsRecipient</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.isRegex">IsRegex</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.isSender">IsSender</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.isSpoof">IsSpoof</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.isTrustedSender">IsTrustedSender</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.pattern">Pattern</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.patternType">PatternType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.verifySender">VerifySender</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LastModified`<sup>Required</sup> <a name="LastModified" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.lastModified"></a>

```csharp
public string LastModified { get; }
```

- *Type:* string

---

##### `ModifiedAt`<sup>Required</sup> <a name="ModifiedAt" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.modifiedAt"></a>

```csharp
public string ModifiedAt { get; }
```

- *Type:* string

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.accountIdInput"></a>

```csharp
public string AccountIdInput { get; }
```

- *Type:* string

---

##### `CommentsInput`<sup>Optional</sup> <a name="CommentsInput" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.commentsInput"></a>

```csharp
public string CommentsInput { get; }
```

- *Type:* string

---

##### `IsAcceptableSenderInput`<sup>Optional</sup> <a name="IsAcceptableSenderInput" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.isAcceptableSenderInput"></a>

```csharp
public bool|IResolvable IsAcceptableSenderInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IsExemptRecipientInput`<sup>Optional</sup> <a name="IsExemptRecipientInput" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.isExemptRecipientInput"></a>

```csharp
public bool|IResolvable IsExemptRecipientInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IsRecipientInput`<sup>Optional</sup> <a name="IsRecipientInput" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.isRecipientInput"></a>

```csharp
public bool|IResolvable IsRecipientInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IsRegexInput`<sup>Optional</sup> <a name="IsRegexInput" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.isRegexInput"></a>

```csharp
public bool|IResolvable IsRegexInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IsSenderInput`<sup>Optional</sup> <a name="IsSenderInput" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.isSenderInput"></a>

```csharp
public bool|IResolvable IsSenderInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IsSpoofInput`<sup>Optional</sup> <a name="IsSpoofInput" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.isSpoofInput"></a>

```csharp
public bool|IResolvable IsSpoofInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IsTrustedSenderInput`<sup>Optional</sup> <a name="IsTrustedSenderInput" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.isTrustedSenderInput"></a>

```csharp
public bool|IResolvable IsTrustedSenderInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `PatternInput`<sup>Optional</sup> <a name="PatternInput" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.patternInput"></a>

```csharp
public string PatternInput { get; }
```

- *Type:* string

---

##### `PatternTypeInput`<sup>Optional</sup> <a name="PatternTypeInput" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.patternTypeInput"></a>

```csharp
public string PatternTypeInput { get; }
```

- *Type:* string

---

##### `VerifySenderInput`<sup>Optional</sup> <a name="VerifySenderInput" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.verifySenderInput"></a>

```csharp
public bool|IResolvable VerifySenderInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.accountId"></a>

```csharp
public string AccountId { get; }
```

- *Type:* string

---

##### `Comments`<sup>Required</sup> <a name="Comments" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.comments"></a>

```csharp
public string Comments { get; }
```

- *Type:* string

---

##### `IsAcceptableSender`<sup>Required</sup> <a name="IsAcceptableSender" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.isAcceptableSender"></a>

```csharp
public bool|IResolvable IsAcceptableSender { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IsExemptRecipient`<sup>Required</sup> <a name="IsExemptRecipient" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.isExemptRecipient"></a>

```csharp
public bool|IResolvable IsExemptRecipient { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IsRecipient`<sup>Required</sup> <a name="IsRecipient" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.isRecipient"></a>

```csharp
public bool|IResolvable IsRecipient { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IsRegex`<sup>Required</sup> <a name="IsRegex" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.isRegex"></a>

```csharp
public bool|IResolvable IsRegex { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IsSender`<sup>Required</sup> <a name="IsSender" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.isSender"></a>

```csharp
public bool|IResolvable IsSender { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IsSpoof`<sup>Required</sup> <a name="IsSpoof" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.isSpoof"></a>

```csharp
public bool|IResolvable IsSpoof { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IsTrustedSender`<sup>Required</sup> <a name="IsTrustedSender" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.isTrustedSender"></a>

```csharp
public bool|IResolvable IsTrustedSender { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Pattern`<sup>Required</sup> <a name="Pattern" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.pattern"></a>

```csharp
public string Pattern { get; }
```

- *Type:* string

---

##### `PatternType`<sup>Required</sup> <a name="PatternType" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.patternType"></a>

```csharp
public string PatternType { get; }
```

- *Type:* string

---

##### `VerifySender`<sup>Required</sup> <a name="VerifySender" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.verifySender"></a>

```csharp
public bool|IResolvable VerifySender { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicy.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### EmailSecurityAllowPolicyConfig <a name="EmailSecurityAllowPolicyConfig" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicyConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new EmailSecurityAllowPolicyConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string AccountId,
    bool|IResolvable IsAcceptableSender,
    bool|IResolvable IsExemptRecipient,
    bool|IResolvable IsRegex,
    bool|IResolvable IsTrustedSender,
    string Pattern,
    string PatternType,
    bool|IResolvable VerifySender,
    string Comments = null,
    bool|IResolvable IsRecipient = null,
    bool|IResolvable IsSender = null,
    bool|IResolvable IsSpoof = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicyConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicyConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicyConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicyConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicyConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicyConfig.property.accountId">AccountId</a></code> | <code>string</code> | Identifier. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicyConfig.property.isAcceptableSender">IsAcceptableSender</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Exempts messages from this sender from Spam, Spoof and Bulk dispositions only; Malicious and Suspicious dispositions still apply. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicyConfig.property.isExemptRecipient">IsExemptRecipient</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Bypasses all detections for messages to this recipient. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicyConfig.property.isRegex">IsRegex</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_security_allow_policy#is_regex EmailSecurityAllowPolicy#is_regex}. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicyConfig.property.isTrustedSender">IsTrustedSender</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Bypasses all detections and link following for messages from this sender. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicyConfig.property.pattern">Pattern</a></code> | <code>string</code> | The pattern value to match. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicyConfig.property.patternType">PatternType</a></code> | <code>string</code> | Type of pattern matching. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicyConfig.property.verifySender">VerifySender</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Enforce DMARC, SPF or DKIM authentication. When on, Email Security only honors policies that pass authentication. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicyConfig.property.comments">Comments</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_security_allow_policy#comments EmailSecurityAllowPolicy#comments}. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicyConfig.property.isRecipient">IsRecipient</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Deprecated as of July 1, 2025. Use `is_exempt_recipient` instead. End of life: July 1, 2026. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicyConfig.property.isSender">IsSender</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Deprecated as of July 1, 2025. Use `is_trusted_sender` instead. End of life: July 1, 2026. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicyConfig.property.isSpoof">IsSpoof</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Deprecated as of July 1, 2025. Use `is_acceptable_sender` instead. End of life: July 1, 2026. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicyConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicyConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicyConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicyConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicyConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicyConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicyConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicyConfig.property.accountId"></a>

```csharp
public string AccountId { get; set; }
```

- *Type:* string

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_security_allow_policy#account_id EmailSecurityAllowPolicy#account_id}

---

##### `IsAcceptableSender`<sup>Required</sup> <a name="IsAcceptableSender" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicyConfig.property.isAcceptableSender"></a>

```csharp
public bool|IResolvable IsAcceptableSender { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Exempts messages from this sender from Spam, Spoof and Bulk dispositions only; Malicious and Suspicious dispositions still apply.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_security_allow_policy#is_acceptable_sender EmailSecurityAllowPolicy#is_acceptable_sender}

---

##### `IsExemptRecipient`<sup>Required</sup> <a name="IsExemptRecipient" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicyConfig.property.isExemptRecipient"></a>

```csharp
public bool|IResolvable IsExemptRecipient { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Bypasses all detections for messages to this recipient.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_security_allow_policy#is_exempt_recipient EmailSecurityAllowPolicy#is_exempt_recipient}

---

##### `IsRegex`<sup>Required</sup> <a name="IsRegex" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicyConfig.property.isRegex"></a>

```csharp
public bool|IResolvable IsRegex { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_security_allow_policy#is_regex EmailSecurityAllowPolicy#is_regex}.

---

##### `IsTrustedSender`<sup>Required</sup> <a name="IsTrustedSender" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicyConfig.property.isTrustedSender"></a>

```csharp
public bool|IResolvable IsTrustedSender { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Bypasses all detections and link following for messages from this sender.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_security_allow_policy#is_trusted_sender EmailSecurityAllowPolicy#is_trusted_sender}

---

##### `Pattern`<sup>Required</sup> <a name="Pattern" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicyConfig.property.pattern"></a>

```csharp
public string Pattern { get; set; }
```

- *Type:* string

The pattern value to match.

The format depends on `pattern_type`: a valid email address for EMAIL (e.g. `user@example.com`), a valid domain name for DOMAIN (e.g. `example.com`), or a plain IPv4 or IPv6 address or CIDR block for IP (e.g. `1.2.3.4`, `1.2.3.0/24`, `2606:4700:4700::1111`, or `2606:4700:4700::/48`); the API rejects private or unique-local, loopback, link-local, unspecified, and IPv4 broadcast addresses, including their IPv4-mapped IPv6 equivalents.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_security_allow_policy#pattern EmailSecurityAllowPolicy#pattern}

---

##### `PatternType`<sup>Required</sup> <a name="PatternType" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicyConfig.property.patternType"></a>

```csharp
public string PatternType { get; set; }
```

- *Type:* string

Type of pattern matching.

* EMAIL: matches a full email address (e.g. `user@example.com`)
* DOMAIN: matches a domain name (e.g. `example.com`)
* IP: matches a plain IPv4 or IPv6 address (e.g. `1.2.3.4` or `2606:4700:4700::1111`) or CIDR block (e.g. `1.2.3.0/24` or `2606:4700:4700::/48`). The API rejects private or unique-local, loopback, link-local, unspecified, and IPv4 broadcast addresses, including their IPv4-mapped IPv6 equivalents.
* UNKNOWN: deprecated; you cannot use this when creating or updating policies, but it may appear on existing entries.
  Available values: "EMAIL", "DOMAIN", "IP", "UNKNOWN".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_security_allow_policy#pattern_type EmailSecurityAllowPolicy#pattern_type}

---

##### `VerifySender`<sup>Required</sup> <a name="VerifySender" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicyConfig.property.verifySender"></a>

```csharp
public bool|IResolvable VerifySender { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Enforce DMARC, SPF or DKIM authentication. When on, Email Security only honors policies that pass authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_security_allow_policy#verify_sender EmailSecurityAllowPolicy#verify_sender}

---

##### `Comments`<sup>Optional</sup> <a name="Comments" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicyConfig.property.comments"></a>

```csharp
public string Comments { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_security_allow_policy#comments EmailSecurityAllowPolicy#comments}.

---

##### `IsRecipient`<sup>Optional</sup> <a name="IsRecipient" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicyConfig.property.isRecipient"></a>

```csharp
public bool|IResolvable IsRecipient { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Deprecated as of July 1, 2025. Use `is_exempt_recipient` instead. End of life: July 1, 2026.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_security_allow_policy#is_recipient EmailSecurityAllowPolicy#is_recipient}

---

##### `IsSender`<sup>Optional</sup> <a name="IsSender" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicyConfig.property.isSender"></a>

```csharp
public bool|IResolvable IsSender { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Deprecated as of July 1, 2025. Use `is_trusted_sender` instead. End of life: July 1, 2026.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_security_allow_policy#is_sender EmailSecurityAllowPolicy#is_sender}

---

##### `IsSpoof`<sup>Optional</sup> <a name="IsSpoof" id="@cdktn/provider-cloudflare.emailSecurityAllowPolicy.EmailSecurityAllowPolicyConfig.property.isSpoof"></a>

```csharp
public bool|IResolvable IsSpoof { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Deprecated as of July 1, 2025. Use `is_acceptable_sender` instead. End of life: July 1, 2026.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_security_allow_policy#is_spoof EmailSecurityAllowPolicy#is_spoof}

---



