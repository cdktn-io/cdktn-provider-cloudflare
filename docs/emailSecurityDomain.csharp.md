# `emailSecurityDomain` Submodule <a name="`emailSecurityDomain` Submodule" id="@cdktn/provider-cloudflare.emailSecurityDomain"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EmailSecurityDomain <a name="EmailSecurityDomain" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_security_domain cloudflare_email_security_domain}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new EmailSecurityDomain(Construct Scope, string Id, EmailSecurityDomainConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainConfig">EmailSecurityDomainConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainConfig">EmailSecurityDomainConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.resetFolder">ResetFolder</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.resetIntegrationId">ResetIntegrationId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.resetLookbackHops">ResetLookbackHops</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.resetRequireTlsInbound">ResetRequireTlsInbound</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.resetRequireTlsOutbound">ResetRequireTlsOutbound</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.resetTransport">ResetTransport</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetFolder` <a name="ResetFolder" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.resetFolder"></a>

```csharp
private void ResetFolder()
```

##### `ResetIntegrationId` <a name="ResetIntegrationId" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.resetIntegrationId"></a>

```csharp
private void ResetIntegrationId()
```

##### `ResetLookbackHops` <a name="ResetLookbackHops" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.resetLookbackHops"></a>

```csharp
private void ResetLookbackHops()
```

##### `ResetRequireTlsInbound` <a name="ResetRequireTlsInbound" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.resetRequireTlsInbound"></a>

```csharp
private void ResetRequireTlsInbound()
```

##### `ResetRequireTlsOutbound` <a name="ResetRequireTlsOutbound" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.resetRequireTlsOutbound"></a>

```csharp
private void ResetRequireTlsOutbound()
```

##### `ResetTransport` <a name="ResetTransport" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.resetTransport"></a>

```csharp
private void ResetTransport()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a EmailSecurityDomain resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

EmailSecurityDomain.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

EmailSecurityDomain.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

EmailSecurityDomain.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

EmailSecurityDomain.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a EmailSecurityDomain resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the EmailSecurityDomain to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing EmailSecurityDomain that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_security_domain#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the EmailSecurityDomain to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.authorization">Authorization</a></code> | <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainAuthorizationOutputReference">EmailSecurityDomainAuthorizationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.dmarcStatus">DmarcStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.emailsProcessed">EmailsProcessed</a></code> | <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainEmailsProcessedOutputReference">EmailSecurityDomainEmailsProcessedOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.inboxProvider">InboxProvider</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.lastModified">LastModified</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.modifiedAt">ModifiedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.o365TenantId">O365TenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.spfStatus">SpfStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.accountIdInput">AccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.allowedDeliveryModesInput">AllowedDeliveryModesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.domainInput">DomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.dropDispositionsInput">DropDispositionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.folderInput">FolderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.integrationIdInput">IntegrationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.ipRestrictionsInput">IpRestrictionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.lookbackHopsInput">LookbackHopsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.regionsInput">RegionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.requireTlsInboundInput">RequireTlsInboundInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.requireTlsOutboundInput">RequireTlsOutboundInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.transportInput">TransportInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.accountId">AccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.allowedDeliveryModes">AllowedDeliveryModes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.domain">Domain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.dropDispositions">DropDispositions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.folder">Folder</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.integrationId">IntegrationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.ipRestrictions">IpRestrictions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.lookbackHops">LookbackHops</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.regions">Regions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.requireTlsInbound">RequireTlsInbound</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.requireTlsOutbound">RequireTlsOutbound</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.transport">Transport</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Authorization`<sup>Required</sup> <a name="Authorization" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.authorization"></a>

```csharp
public EmailSecurityDomainAuthorizationOutputReference Authorization { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainAuthorizationOutputReference">EmailSecurityDomainAuthorizationOutputReference</a>

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `DmarcStatus`<sup>Required</sup> <a name="DmarcStatus" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.dmarcStatus"></a>

```csharp
public string DmarcStatus { get; }
```

- *Type:* string

---

##### `EmailsProcessed`<sup>Required</sup> <a name="EmailsProcessed" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.emailsProcessed"></a>

```csharp
public EmailSecurityDomainEmailsProcessedOutputReference EmailsProcessed { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainEmailsProcessedOutputReference">EmailSecurityDomainEmailsProcessedOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InboxProvider`<sup>Required</sup> <a name="InboxProvider" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.inboxProvider"></a>

```csharp
public string InboxProvider { get; }
```

- *Type:* string

---

##### `LastModified`<sup>Required</sup> <a name="LastModified" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.lastModified"></a>

```csharp
public string LastModified { get; }
```

- *Type:* string

---

##### `ModifiedAt`<sup>Required</sup> <a name="ModifiedAt" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.modifiedAt"></a>

```csharp
public string ModifiedAt { get; }
```

- *Type:* string

---

##### `O365TenantId`<sup>Required</sup> <a name="O365TenantId" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.o365TenantId"></a>

```csharp
public string O365TenantId { get; }
```

- *Type:* string

---

##### `SpfStatus`<sup>Required</sup> <a name="SpfStatus" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.spfStatus"></a>

```csharp
public string SpfStatus { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.accountIdInput"></a>

```csharp
public string AccountIdInput { get; }
```

- *Type:* string

---

##### `AllowedDeliveryModesInput`<sup>Optional</sup> <a name="AllowedDeliveryModesInput" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.allowedDeliveryModesInput"></a>

```csharp
public string[] AllowedDeliveryModesInput { get; }
```

- *Type:* string[]

---

##### `DomainInput`<sup>Optional</sup> <a name="DomainInput" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.domainInput"></a>

```csharp
public string DomainInput { get; }
```

- *Type:* string

---

##### `DropDispositionsInput`<sup>Optional</sup> <a name="DropDispositionsInput" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.dropDispositionsInput"></a>

```csharp
public string[] DropDispositionsInput { get; }
```

- *Type:* string[]

---

##### `FolderInput`<sup>Optional</sup> <a name="FolderInput" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.folderInput"></a>

```csharp
public string FolderInput { get; }
```

- *Type:* string

---

##### `IntegrationIdInput`<sup>Optional</sup> <a name="IntegrationIdInput" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.integrationIdInput"></a>

```csharp
public string IntegrationIdInput { get; }
```

- *Type:* string

---

##### `IpRestrictionsInput`<sup>Optional</sup> <a name="IpRestrictionsInput" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.ipRestrictionsInput"></a>

```csharp
public string[] IpRestrictionsInput { get; }
```

- *Type:* string[]

---

##### `LookbackHopsInput`<sup>Optional</sup> <a name="LookbackHopsInput" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.lookbackHopsInput"></a>

```csharp
public double LookbackHopsInput { get; }
```

- *Type:* double

---

##### `RegionsInput`<sup>Optional</sup> <a name="RegionsInput" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.regionsInput"></a>

```csharp
public string[] RegionsInput { get; }
```

- *Type:* string[]

---

##### `RequireTlsInboundInput`<sup>Optional</sup> <a name="RequireTlsInboundInput" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.requireTlsInboundInput"></a>

```csharp
public bool|IResolvable RequireTlsInboundInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `RequireTlsOutboundInput`<sup>Optional</sup> <a name="RequireTlsOutboundInput" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.requireTlsOutboundInput"></a>

```csharp
public bool|IResolvable RequireTlsOutboundInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `TransportInput`<sup>Optional</sup> <a name="TransportInput" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.transportInput"></a>

```csharp
public string TransportInput { get; }
```

- *Type:* string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.accountId"></a>

```csharp
public string AccountId { get; }
```

- *Type:* string

---

##### `AllowedDeliveryModes`<sup>Required</sup> <a name="AllowedDeliveryModes" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.allowedDeliveryModes"></a>

```csharp
public string[] AllowedDeliveryModes { get; }
```

- *Type:* string[]

---

##### `Domain`<sup>Required</sup> <a name="Domain" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.domain"></a>

```csharp
public string Domain { get; }
```

- *Type:* string

---

##### `DropDispositions`<sup>Required</sup> <a name="DropDispositions" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.dropDispositions"></a>

```csharp
public string[] DropDispositions { get; }
```

- *Type:* string[]

---

##### `Folder`<sup>Required</sup> <a name="Folder" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.folder"></a>

```csharp
public string Folder { get; }
```

- *Type:* string

---

##### `IntegrationId`<sup>Required</sup> <a name="IntegrationId" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.integrationId"></a>

```csharp
public string IntegrationId { get; }
```

- *Type:* string

---

##### `IpRestrictions`<sup>Required</sup> <a name="IpRestrictions" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.ipRestrictions"></a>

```csharp
public string[] IpRestrictions { get; }
```

- *Type:* string[]

---

##### `LookbackHops`<sup>Required</sup> <a name="LookbackHops" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.lookbackHops"></a>

```csharp
public double LookbackHops { get; }
```

- *Type:* double

---

##### `Regions`<sup>Required</sup> <a name="Regions" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.regions"></a>

```csharp
public string[] Regions { get; }
```

- *Type:* string[]

---

##### `RequireTlsInbound`<sup>Required</sup> <a name="RequireTlsInbound" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.requireTlsInbound"></a>

```csharp
public bool|IResolvable RequireTlsInbound { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `RequireTlsOutbound`<sup>Required</sup> <a name="RequireTlsOutbound" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.requireTlsOutbound"></a>

```csharp
public bool|IResolvable RequireTlsOutbound { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Transport`<sup>Required</sup> <a name="Transport" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.transport"></a>

```csharp
public string Transport { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomain.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### EmailSecurityDomainAuthorization <a name="EmailSecurityDomainAuthorization" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainAuthorization"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainAuthorization.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new EmailSecurityDomainAuthorization {

};
```


### EmailSecurityDomainConfig <a name="EmailSecurityDomainConfig" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new EmailSecurityDomainConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string AccountId,
    string[] AllowedDeliveryModes,
    string Domain,
    string[] DropDispositions,
    string[] IpRestrictions,
    string[] Regions,
    string Folder = null,
    string IntegrationId = null,
    double LookbackHops = null,
    bool|IResolvable RequireTlsInbound = null,
    bool|IResolvable RequireTlsOutbound = null,
    string Transport = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainConfig.property.accountId">AccountId</a></code> | <code>string</code> | Identifier. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainConfig.property.allowedDeliveryModes">AllowedDeliveryModes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_security_domain#allowed_delivery_modes EmailSecurityDomain#allowed_delivery_modes}. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainConfig.property.domain">Domain</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_security_domain#domain EmailSecurityDomain#domain}. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainConfig.property.dropDispositions">DropDispositions</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_security_domain#drop_dispositions EmailSecurityDomain#drop_dispositions}. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainConfig.property.ipRestrictions">IpRestrictions</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_security_domain#ip_restrictions EmailSecurityDomain#ip_restrictions}. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainConfig.property.regions">Regions</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_security_domain#regions EmailSecurityDomain#regions}. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainConfig.property.folder">Folder</a></code> | <code>string</code> | Available values: "AllItems", "Inbox". |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainConfig.property.integrationId">IntegrationId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_security_domain#integration_id EmailSecurityDomain#integration_id}. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainConfig.property.lookbackHops">LookbackHops</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_security_domain#lookback_hops EmailSecurityDomain#lookback_hops}. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainConfig.property.requireTlsInbound">RequireTlsInbound</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_security_domain#require_tls_inbound EmailSecurityDomain#require_tls_inbound}. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainConfig.property.requireTlsOutbound">RequireTlsOutbound</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_security_domain#require_tls_outbound EmailSecurityDomain#require_tls_outbound}. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainConfig.property.transport">Transport</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_security_domain#transport EmailSecurityDomain#transport}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainConfig.property.accountId"></a>

```csharp
public string AccountId { get; set; }
```

- *Type:* string

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_security_domain#account_id EmailSecurityDomain#account_id}

---

##### `AllowedDeliveryModes`<sup>Required</sup> <a name="AllowedDeliveryModes" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainConfig.property.allowedDeliveryModes"></a>

```csharp
public string[] AllowedDeliveryModes { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_security_domain#allowed_delivery_modes EmailSecurityDomain#allowed_delivery_modes}.

---

##### `Domain`<sup>Required</sup> <a name="Domain" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainConfig.property.domain"></a>

```csharp
public string Domain { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_security_domain#domain EmailSecurityDomain#domain}.

---

##### `DropDispositions`<sup>Required</sup> <a name="DropDispositions" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainConfig.property.dropDispositions"></a>

```csharp
public string[] DropDispositions { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_security_domain#drop_dispositions EmailSecurityDomain#drop_dispositions}.

---

##### `IpRestrictions`<sup>Required</sup> <a name="IpRestrictions" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainConfig.property.ipRestrictions"></a>

```csharp
public string[] IpRestrictions { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_security_domain#ip_restrictions EmailSecurityDomain#ip_restrictions}.

---

##### `Regions`<sup>Required</sup> <a name="Regions" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainConfig.property.regions"></a>

```csharp
public string[] Regions { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_security_domain#regions EmailSecurityDomain#regions}.

---

##### `Folder`<sup>Optional</sup> <a name="Folder" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainConfig.property.folder"></a>

```csharp
public string Folder { get; set; }
```

- *Type:* string

Available values: "AllItems", "Inbox".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_security_domain#folder EmailSecurityDomain#folder}

---

##### `IntegrationId`<sup>Optional</sup> <a name="IntegrationId" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainConfig.property.integrationId"></a>

```csharp
public string IntegrationId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_security_domain#integration_id EmailSecurityDomain#integration_id}.

---

##### `LookbackHops`<sup>Optional</sup> <a name="LookbackHops" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainConfig.property.lookbackHops"></a>

```csharp
public double LookbackHops { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_security_domain#lookback_hops EmailSecurityDomain#lookback_hops}.

---

##### `RequireTlsInbound`<sup>Optional</sup> <a name="RequireTlsInbound" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainConfig.property.requireTlsInbound"></a>

```csharp
public bool|IResolvable RequireTlsInbound { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_security_domain#require_tls_inbound EmailSecurityDomain#require_tls_inbound}.

---

##### `RequireTlsOutbound`<sup>Optional</sup> <a name="RequireTlsOutbound" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainConfig.property.requireTlsOutbound"></a>

```csharp
public bool|IResolvable RequireTlsOutbound { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_security_domain#require_tls_outbound EmailSecurityDomain#require_tls_outbound}.

---

##### `Transport`<sup>Optional</sup> <a name="Transport" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainConfig.property.transport"></a>

```csharp
public string Transport { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.25.0/docs/resources/email_security_domain#transport EmailSecurityDomain#transport}.

---

### EmailSecurityDomainEmailsProcessed <a name="EmailSecurityDomainEmailsProcessed" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainEmailsProcessed"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainEmailsProcessed.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new EmailSecurityDomainEmailsProcessed {

};
```


## Classes <a name="Classes" id="Classes"></a>

### EmailSecurityDomainAuthorizationOutputReference <a name="EmailSecurityDomainAuthorizationOutputReference" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainAuthorizationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainAuthorizationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new EmailSecurityDomainAuthorizationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainAuthorizationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainAuthorizationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainAuthorizationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainAuthorizationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainAuthorizationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainAuthorizationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainAuthorizationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainAuthorizationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainAuthorizationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainAuthorizationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainAuthorizationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainAuthorizationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainAuthorizationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainAuthorizationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainAuthorizationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainAuthorizationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainAuthorizationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainAuthorizationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainAuthorizationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainAuthorizationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainAuthorizationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainAuthorizationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainAuthorizationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainAuthorizationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainAuthorizationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainAuthorizationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainAuthorizationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainAuthorizationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainAuthorizationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainAuthorizationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainAuthorizationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainAuthorizationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainAuthorizationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainAuthorizationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainAuthorizationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainAuthorizationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainAuthorizationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainAuthorizationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainAuthorizationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainAuthorizationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainAuthorizationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainAuthorizationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainAuthorizationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainAuthorizationOutputReference.property.authorized">Authorized</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainAuthorizationOutputReference.property.statusMessage">StatusMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainAuthorizationOutputReference.property.timestamp">Timestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainAuthorizationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainAuthorization">EmailSecurityDomainAuthorization</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainAuthorizationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainAuthorizationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Authorized`<sup>Required</sup> <a name="Authorized" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainAuthorizationOutputReference.property.authorized"></a>

```csharp
public IResolvable Authorized { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `StatusMessage`<sup>Required</sup> <a name="StatusMessage" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainAuthorizationOutputReference.property.statusMessage"></a>

```csharp
public string StatusMessage { get; }
```

- *Type:* string

---

##### `Timestamp`<sup>Required</sup> <a name="Timestamp" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainAuthorizationOutputReference.property.timestamp"></a>

```csharp
public string Timestamp { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainAuthorizationOutputReference.property.internalValue"></a>

```csharp
public EmailSecurityDomainAuthorization InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainAuthorization">EmailSecurityDomainAuthorization</a>

---


### EmailSecurityDomainEmailsProcessedOutputReference <a name="EmailSecurityDomainEmailsProcessedOutputReference" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainEmailsProcessedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainEmailsProcessedOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new EmailSecurityDomainEmailsProcessedOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainEmailsProcessedOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainEmailsProcessedOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainEmailsProcessedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainEmailsProcessedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainEmailsProcessedOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainEmailsProcessedOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainEmailsProcessedOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainEmailsProcessedOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainEmailsProcessedOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainEmailsProcessedOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainEmailsProcessedOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainEmailsProcessedOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainEmailsProcessedOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainEmailsProcessedOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainEmailsProcessedOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainEmailsProcessedOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainEmailsProcessedOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainEmailsProcessedOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainEmailsProcessedOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainEmailsProcessedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainEmailsProcessedOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainEmailsProcessedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainEmailsProcessedOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainEmailsProcessedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainEmailsProcessedOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainEmailsProcessedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainEmailsProcessedOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainEmailsProcessedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainEmailsProcessedOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainEmailsProcessedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainEmailsProcessedOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainEmailsProcessedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainEmailsProcessedOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainEmailsProcessedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainEmailsProcessedOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainEmailsProcessedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainEmailsProcessedOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainEmailsProcessedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainEmailsProcessedOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainEmailsProcessedOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainEmailsProcessedOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainEmailsProcessedOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainEmailsProcessedOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainEmailsProcessedOutputReference.property.timestamp">Timestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainEmailsProcessedOutputReference.property.totalEmailsProcessed">TotalEmailsProcessed</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainEmailsProcessedOutputReference.property.totalEmailsProcessedPrevious">TotalEmailsProcessedPrevious</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainEmailsProcessedOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainEmailsProcessed">EmailSecurityDomainEmailsProcessed</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainEmailsProcessedOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainEmailsProcessedOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Timestamp`<sup>Required</sup> <a name="Timestamp" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainEmailsProcessedOutputReference.property.timestamp"></a>

```csharp
public string Timestamp { get; }
```

- *Type:* string

---

##### `TotalEmailsProcessed`<sup>Required</sup> <a name="TotalEmailsProcessed" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainEmailsProcessedOutputReference.property.totalEmailsProcessed"></a>

```csharp
public double TotalEmailsProcessed { get; }
```

- *Type:* double

---

##### `TotalEmailsProcessedPrevious`<sup>Required</sup> <a name="TotalEmailsProcessedPrevious" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainEmailsProcessedOutputReference.property.totalEmailsProcessedPrevious"></a>

```csharp
public double TotalEmailsProcessedPrevious { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainEmailsProcessedOutputReference.property.internalValue"></a>

```csharp
public EmailSecurityDomainEmailsProcessed InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.emailSecurityDomain.EmailSecurityDomainEmailsProcessed">EmailSecurityDomainEmailsProcessed</a>

---



