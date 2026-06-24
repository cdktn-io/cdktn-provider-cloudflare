# `emailSecurityTrustedDomains` Submodule <a name="`emailSecurityTrustedDomains` Submodule" id="@cdktn/provider-cloudflare.emailSecurityTrustedDomains"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EmailSecurityTrustedDomains <a name="EmailSecurityTrustedDomains" id="@cdktn/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/email_security_trusted_domains cloudflare_email_security_trusted_domains}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new EmailSecurityTrustedDomains(Construct Scope, string Id, EmailSecurityTrustedDomainsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsConfig">EmailSecurityTrustedDomainsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsConfig">EmailSecurityTrustedDomainsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.resetComments">ResetComments</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.resetIsRecent">ResetIsRecent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.resetIsRegex">ResetIsRegex</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.resetIsSimilarity">ResetIsSimilarity</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetComments` <a name="ResetComments" id="@cdktn/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.resetComments"></a>

```csharp
private void ResetComments()
```

##### `ResetIsRecent` <a name="ResetIsRecent" id="@cdktn/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.resetIsRecent"></a>

```csharp
private void ResetIsRecent()
```

##### `ResetIsRegex` <a name="ResetIsRegex" id="@cdktn/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.resetIsRegex"></a>

```csharp
private void ResetIsRegex()
```

##### `ResetIsSimilarity` <a name="ResetIsSimilarity" id="@cdktn/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.resetIsSimilarity"></a>

```csharp
private void ResetIsSimilarity()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a EmailSecurityTrustedDomains resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

EmailSecurityTrustedDomains.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

EmailSecurityTrustedDomains.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

EmailSecurityTrustedDomains.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

EmailSecurityTrustedDomains.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a EmailSecurityTrustedDomains resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the EmailSecurityTrustedDomains to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing EmailSecurityTrustedDomains that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/email_security_trusted_domains#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the EmailSecurityTrustedDomains to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.property.lastModified">LastModified</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.property.modifiedAt">ModifiedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.property.accountIdInput">AccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.property.commentsInput">CommentsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.property.isRecentInput">IsRecentInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.property.isRegexInput">IsRegexInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.property.isSimilarityInput">IsSimilarityInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.property.patternInput">PatternInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.property.accountId">AccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.property.comments">Comments</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.property.isRecent">IsRecent</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.property.isRegex">IsRegex</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.property.isSimilarity">IsSimilarity</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.property.pattern">Pattern</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LastModified`<sup>Required</sup> <a name="LastModified" id="@cdktn/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.property.lastModified"></a>

```csharp
public string LastModified { get; }
```

- *Type:* string

---

##### `ModifiedAt`<sup>Required</sup> <a name="ModifiedAt" id="@cdktn/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.property.modifiedAt"></a>

```csharp
public string ModifiedAt { get; }
```

- *Type:* string

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktn/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.property.accountIdInput"></a>

```csharp
public string AccountIdInput { get; }
```

- *Type:* string

---

##### `CommentsInput`<sup>Optional</sup> <a name="CommentsInput" id="@cdktn/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.property.commentsInput"></a>

```csharp
public string CommentsInput { get; }
```

- *Type:* string

---

##### `IsRecentInput`<sup>Optional</sup> <a name="IsRecentInput" id="@cdktn/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.property.isRecentInput"></a>

```csharp
public bool|IResolvable IsRecentInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IsRegexInput`<sup>Optional</sup> <a name="IsRegexInput" id="@cdktn/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.property.isRegexInput"></a>

```csharp
public bool|IResolvable IsRegexInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IsSimilarityInput`<sup>Optional</sup> <a name="IsSimilarityInput" id="@cdktn/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.property.isSimilarityInput"></a>

```csharp
public bool|IResolvable IsSimilarityInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `PatternInput`<sup>Optional</sup> <a name="PatternInput" id="@cdktn/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.property.patternInput"></a>

```csharp
public string PatternInput { get; }
```

- *Type:* string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.property.accountId"></a>

```csharp
public string AccountId { get; }
```

- *Type:* string

---

##### `Comments`<sup>Required</sup> <a name="Comments" id="@cdktn/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.property.comments"></a>

```csharp
public string Comments { get; }
```

- *Type:* string

---

##### `IsRecent`<sup>Required</sup> <a name="IsRecent" id="@cdktn/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.property.isRecent"></a>

```csharp
public bool|IResolvable IsRecent { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IsRegex`<sup>Required</sup> <a name="IsRegex" id="@cdktn/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.property.isRegex"></a>

```csharp
public bool|IResolvable IsRegex { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IsSimilarity`<sup>Required</sup> <a name="IsSimilarity" id="@cdktn/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.property.isSimilarity"></a>

```csharp
public bool|IResolvable IsSimilarity { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Pattern`<sup>Required</sup> <a name="Pattern" id="@cdktn/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.property.pattern"></a>

```csharp
public string Pattern { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomains.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### EmailSecurityTrustedDomainsConfig <a name="EmailSecurityTrustedDomainsConfig" id="@cdktn/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new EmailSecurityTrustedDomainsConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string AccountId,
    string Pattern,
    string Comments = null,
    bool|IResolvable IsRecent = null,
    bool|IResolvable IsRegex = null,
    bool|IResolvable IsSimilarity = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsConfig.property.accountId">AccountId</a></code> | <code>string</code> | Identifier. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsConfig.property.pattern">Pattern</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/email_security_trusted_domains#pattern EmailSecurityTrustedDomains#pattern}. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsConfig.property.comments">Comments</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/email_security_trusted_domains#comments EmailSecurityTrustedDomains#comments}. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsConfig.property.isRecent">IsRecent</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Select to prevent recently registered domains from triggering a Suspicious or Malicious disposition. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsConfig.property.isRegex">IsRegex</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/email_security_trusted_domains#is_regex EmailSecurityTrustedDomains#is_regex}. |
| <code><a href="#@cdktn/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsConfig.property.isSimilarity">IsSimilarity</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Select for partner or other approved domains that have similar spelling to your connected domains. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsConfig.property.accountId"></a>

```csharp
public string AccountId { get; set; }
```

- *Type:* string

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/email_security_trusted_domains#account_id EmailSecurityTrustedDomains#account_id}

---

##### `Pattern`<sup>Required</sup> <a name="Pattern" id="@cdktn/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsConfig.property.pattern"></a>

```csharp
public string Pattern { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/email_security_trusted_domains#pattern EmailSecurityTrustedDomains#pattern}.

---

##### `Comments`<sup>Optional</sup> <a name="Comments" id="@cdktn/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsConfig.property.comments"></a>

```csharp
public string Comments { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/email_security_trusted_domains#comments EmailSecurityTrustedDomains#comments}.

---

##### `IsRecent`<sup>Optional</sup> <a name="IsRecent" id="@cdktn/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsConfig.property.isRecent"></a>

```csharp
public bool|IResolvable IsRecent { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Select to prevent recently registered domains from triggering a Suspicious or Malicious disposition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/email_security_trusted_domains#is_recent EmailSecurityTrustedDomains#is_recent}

---

##### `IsRegex`<sup>Optional</sup> <a name="IsRegex" id="@cdktn/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsConfig.property.isRegex"></a>

```csharp
public bool|IResolvable IsRegex { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/email_security_trusted_domains#is_regex EmailSecurityTrustedDomains#is_regex}.

---

##### `IsSimilarity`<sup>Optional</sup> <a name="IsSimilarity" id="@cdktn/provider-cloudflare.emailSecurityTrustedDomains.EmailSecurityTrustedDomainsConfig.property.isSimilarity"></a>

```csharp
public bool|IResolvable IsSimilarity { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Select for partner or other approved domains that have similar spelling to your connected domains.

Prevents listed domains from triggering a Spoof disposition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/email_security_trusted_domains#is_similarity EmailSecurityTrustedDomains#is_similarity}

---



