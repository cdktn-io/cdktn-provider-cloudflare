# `emailSendingSubdomain` Submodule <a name="`emailSendingSubdomain` Submodule" id="@cdktn/provider-cloudflare.emailSendingSubdomain"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EmailSendingSubdomain <a name="EmailSendingSubdomain" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_sending_subdomain cloudflare_email_sending_subdomain}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new EmailSendingSubdomain(Construct Scope, string Id, EmailSendingSubdomainConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomainConfig">EmailSendingSubdomainConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomainConfig">EmailSendingSubdomainConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.resetDropSuppressedRecipients">ResetDropSuppressedRecipients</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.resetPreviewEnabled">ResetPreviewEnabled</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetDropSuppressedRecipients` <a name="ResetDropSuppressedRecipients" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.resetDropSuppressedRecipients"></a>

```csharp
private void ResetDropSuppressedRecipients()
```

##### `ResetPreviewEnabled` <a name="ResetPreviewEnabled" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.resetPreviewEnabled"></a>

```csharp
private void ResetPreviewEnabled()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a EmailSendingSubdomain resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

EmailSendingSubdomain.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

EmailSendingSubdomain.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

EmailSendingSubdomain.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

EmailSendingSubdomain.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a EmailSendingSubdomain resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the EmailSendingSubdomain to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing EmailSendingSubdomain that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_sending_subdomain#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the EmailSendingSubdomain to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.property.created">Created</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.property.dkimSelector">DkimSelector</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.property.enabled">Enabled</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.property.modified">Modified</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.property.returnPathDomain">ReturnPathDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.property.tag">Tag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.property.dropSuppressedRecipientsInput">DropSuppressedRecipientsInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.property.previewEnabledInput">PreviewEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.property.zoneIdInput">ZoneIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.property.dropSuppressedRecipients">DropSuppressedRecipients</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.property.previewEnabled">PreviewEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.property.zoneId">ZoneId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Created`<sup>Required</sup> <a name="Created" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.property.created"></a>

```csharp
public string Created { get; }
```

- *Type:* string

---

##### `DkimSelector`<sup>Required</sup> <a name="DkimSelector" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.property.dkimSelector"></a>

```csharp
public string DkimSelector { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.property.enabled"></a>

```csharp
public IResolvable Enabled { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Modified`<sup>Required</sup> <a name="Modified" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.property.modified"></a>

```csharp
public string Modified { get; }
```

- *Type:* string

---

##### `ReturnPathDomain`<sup>Required</sup> <a name="ReturnPathDomain" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.property.returnPathDomain"></a>

```csharp
public string ReturnPathDomain { get; }
```

- *Type:* string

---

##### `Tag`<sup>Required</sup> <a name="Tag" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.property.tag"></a>

```csharp
public string Tag { get; }
```

- *Type:* string

---

##### `DropSuppressedRecipientsInput`<sup>Optional</sup> <a name="DropSuppressedRecipientsInput" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.property.dropSuppressedRecipientsInput"></a>

```csharp
public bool|IResolvable DropSuppressedRecipientsInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PreviewEnabledInput`<sup>Optional</sup> <a name="PreviewEnabledInput" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.property.previewEnabledInput"></a>

```csharp
public bool|IResolvable PreviewEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ZoneIdInput`<sup>Optional</sup> <a name="ZoneIdInput" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.property.zoneIdInput"></a>

```csharp
public string ZoneIdInput { get; }
```

- *Type:* string

---

##### `DropSuppressedRecipients`<sup>Required</sup> <a name="DropSuppressedRecipients" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.property.dropSuppressedRecipients"></a>

```csharp
public bool|IResolvable DropSuppressedRecipients { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PreviewEnabled`<sup>Required</sup> <a name="PreviewEnabled" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.property.previewEnabled"></a>

```csharp
public bool|IResolvable PreviewEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ZoneId`<sup>Required</sup> <a name="ZoneId" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.property.zoneId"></a>

```csharp
public string ZoneId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomain.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### EmailSendingSubdomainConfig <a name="EmailSendingSubdomainConfig" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomainConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomainConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new EmailSendingSubdomainConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Name,
    string ZoneId,
    bool|IResolvable DropSuppressedRecipients = null,
    bool|IResolvable PreviewEnabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomainConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomainConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomainConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomainConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomainConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomainConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomainConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomainConfig.property.name">Name</a></code> | <code>string</code> | The domain name within the zone. |
| <code><a href="#@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomainConfig.property.zoneId">ZoneId</a></code> | <code>string</code> | Identifier. |
| <code><a href="#@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomainConfig.property.dropSuppressedRecipients">DropSuppressedRecipients</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether a send request that includes a recipient suppressed on this subdomain drops that recipient and still delivers to the rest, instead of failing the entire request. |
| <code><a href="#@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomainConfig.property.previewEnabled">PreviewEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether sent messages from this subdomain can be previewed in the activity log. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomainConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomainConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomainConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomainConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomainConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomainConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomainConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomainConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The domain name within the zone.

A wildcard is allowed only as the complete leftmost label (`*.example.com`) and requires the account wildcard Email Sending entitlement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_sending_subdomain#name EmailSendingSubdomain#name}

---

##### `ZoneId`<sup>Required</sup> <a name="ZoneId" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomainConfig.property.zoneId"></a>

```csharp
public string ZoneId { get; set; }
```

- *Type:* string

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_sending_subdomain#zone_id EmailSendingSubdomain#zone_id}

---

##### `DropSuppressedRecipients`<sup>Optional</sup> <a name="DropSuppressedRecipients" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomainConfig.property.dropSuppressedRecipients"></a>

```csharp
public bool|IResolvable DropSuppressedRecipients { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether a send request that includes a recipient suppressed on this subdomain drops that recipient and still delivers to the rest, instead of failing the entire request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_sending_subdomain#drop_suppressed_recipients EmailSendingSubdomain#drop_suppressed_recipients}

---

##### `PreviewEnabled`<sup>Optional</sup> <a name="PreviewEnabled" id="@cdktn/provider-cloudflare.emailSendingSubdomain.EmailSendingSubdomainConfig.property.previewEnabled"></a>

```csharp
public bool|IResolvable PreviewEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether sent messages from this subdomain can be previewed in the activity log.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_sending_subdomain#preview_enabled EmailSendingSubdomain#preview_enabled}

---



