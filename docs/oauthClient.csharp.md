# `oauthClient` Submodule <a name="`oauthClient` Submodule" id="@cdktn/provider-cloudflare.oauthClient"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OauthClient <a name="OauthClient" id="@cdktn/provider-cloudflare.oauthClient.OauthClient"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/oauth_client cloudflare_oauth_client}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new OauthClient(Construct Scope, string Id, OauthClientConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClientConfig">OauthClientConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.oauthClient.OauthClientConfig">OauthClientConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.resetAllowedCorsOrigins">ResetAllowedCorsOrigins</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.resetClientUri">ResetClientUri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.resetLogoUri">ResetLogoUri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.resetOauthClientId">ResetOauthClientId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.resetPolicyUri">ResetPolicyUri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.resetPostLogoutRedirectUris">ResetPostLogoutRedirectUris</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.resetTosUri">ResetTosUri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.resetVisibility">ResetVisibility</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetAllowedCorsOrigins` <a name="ResetAllowedCorsOrigins" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.resetAllowedCorsOrigins"></a>

```csharp
private void ResetAllowedCorsOrigins()
```

##### `ResetClientUri` <a name="ResetClientUri" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.resetClientUri"></a>

```csharp
private void ResetClientUri()
```

##### `ResetLogoUri` <a name="ResetLogoUri" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.resetLogoUri"></a>

```csharp
private void ResetLogoUri()
```

##### `ResetOauthClientId` <a name="ResetOauthClientId" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.resetOauthClientId"></a>

```csharp
private void ResetOauthClientId()
```

##### `ResetPolicyUri` <a name="ResetPolicyUri" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.resetPolicyUri"></a>

```csharp
private void ResetPolicyUri()
```

##### `ResetPostLogoutRedirectUris` <a name="ResetPostLogoutRedirectUris" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.resetPostLogoutRedirectUris"></a>

```csharp
private void ResetPostLogoutRedirectUris()
```

##### `ResetTosUri` <a name="ResetTosUri" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.resetTosUri"></a>

```csharp
private void ResetTosUri()
```

##### `ResetVisibility` <a name="ResetVisibility" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.resetVisibility"></a>

```csharp
private void ResetVisibility()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a OauthClient resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

OauthClient.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

OauthClient.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

OauthClient.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

OauthClient.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a OauthClient resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the OauthClient to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing OauthClient that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/oauth_client#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the OauthClient to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.property.clientId">ClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.property.clientSecret">ClientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.property.clientUriVerification">ClientUriVerification</a></code> | <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerificationOutputReference">OauthClientClientUriVerificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.property.hasRotatedSecret">HasRotatedSecret</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.property.promotedAt">PromotedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.property.updatedAt">UpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.property.accountIdInput">AccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.property.allowedCorsOriginsInput">AllowedCorsOriginsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.property.clientNameInput">ClientNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.property.clientUriInput">ClientUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.property.grantTypesInput">GrantTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.property.logoUriInput">LogoUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.property.oauthClientIdInput">OauthClientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.property.policyUriInput">PolicyUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.property.postLogoutRedirectUrisInput">PostLogoutRedirectUrisInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.property.redirectUrisInput">RedirectUrisInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.property.responseTypesInput">ResponseTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.property.scopesInput">ScopesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.property.tokenEndpointAuthMethodInput">TokenEndpointAuthMethodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.property.tosUriInput">TosUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.property.visibilityInput">VisibilityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.property.accountId">AccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.property.allowedCorsOrigins">AllowedCorsOrigins</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.property.clientName">ClientName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.property.clientUri">ClientUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.property.grantTypes">GrantTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.property.logoUri">LogoUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.property.oauthClientId">OauthClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.property.policyUri">PolicyUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.property.postLogoutRedirectUris">PostLogoutRedirectUris</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.property.redirectUris">RedirectUris</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.property.responseTypes">ResponseTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.property.scopes">Scopes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.property.tokenEndpointAuthMethod">TokenEndpointAuthMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.property.tosUri">TosUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.property.visibility">Visibility</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.property.clientId"></a>

```csharp
public string ClientId { get; }
```

- *Type:* string

---

##### `ClientSecret`<sup>Required</sup> <a name="ClientSecret" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.property.clientSecret"></a>

```csharp
public string ClientSecret { get; }
```

- *Type:* string

---

##### `ClientUriVerification`<sup>Required</sup> <a name="ClientUriVerification" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.property.clientUriVerification"></a>

```csharp
public OauthClientClientUriVerificationOutputReference ClientUriVerification { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerificationOutputReference">OauthClientClientUriVerificationOutputReference</a>

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `HasRotatedSecret`<sup>Required</sup> <a name="HasRotatedSecret" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.property.hasRotatedSecret"></a>

```csharp
public IResolvable HasRotatedSecret { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `PromotedAt`<sup>Required</sup> <a name="PromotedAt" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.property.promotedAt"></a>

```csharp
public string PromotedAt { get; }
```

- *Type:* string

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.property.updatedAt"></a>

```csharp
public string UpdatedAt { get; }
```

- *Type:* string

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.property.accountIdInput"></a>

```csharp
public string AccountIdInput { get; }
```

- *Type:* string

---

##### `AllowedCorsOriginsInput`<sup>Optional</sup> <a name="AllowedCorsOriginsInput" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.property.allowedCorsOriginsInput"></a>

```csharp
public string[] AllowedCorsOriginsInput { get; }
```

- *Type:* string[]

---

##### `ClientNameInput`<sup>Optional</sup> <a name="ClientNameInput" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.property.clientNameInput"></a>

```csharp
public string ClientNameInput { get; }
```

- *Type:* string

---

##### `ClientUriInput`<sup>Optional</sup> <a name="ClientUriInput" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.property.clientUriInput"></a>

```csharp
public string ClientUriInput { get; }
```

- *Type:* string

---

##### `GrantTypesInput`<sup>Optional</sup> <a name="GrantTypesInput" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.property.grantTypesInput"></a>

```csharp
public string[] GrantTypesInput { get; }
```

- *Type:* string[]

---

##### `LogoUriInput`<sup>Optional</sup> <a name="LogoUriInput" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.property.logoUriInput"></a>

```csharp
public string LogoUriInput { get; }
```

- *Type:* string

---

##### `OauthClientIdInput`<sup>Optional</sup> <a name="OauthClientIdInput" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.property.oauthClientIdInput"></a>

```csharp
public string OauthClientIdInput { get; }
```

- *Type:* string

---

##### `PolicyUriInput`<sup>Optional</sup> <a name="PolicyUriInput" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.property.policyUriInput"></a>

```csharp
public string PolicyUriInput { get; }
```

- *Type:* string

---

##### `PostLogoutRedirectUrisInput`<sup>Optional</sup> <a name="PostLogoutRedirectUrisInput" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.property.postLogoutRedirectUrisInput"></a>

```csharp
public string[] PostLogoutRedirectUrisInput { get; }
```

- *Type:* string[]

---

##### `RedirectUrisInput`<sup>Optional</sup> <a name="RedirectUrisInput" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.property.redirectUrisInput"></a>

```csharp
public string[] RedirectUrisInput { get; }
```

- *Type:* string[]

---

##### `ResponseTypesInput`<sup>Optional</sup> <a name="ResponseTypesInput" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.property.responseTypesInput"></a>

```csharp
public string[] ResponseTypesInput { get; }
```

- *Type:* string[]

---

##### `ScopesInput`<sup>Optional</sup> <a name="ScopesInput" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.property.scopesInput"></a>

```csharp
public string[] ScopesInput { get; }
```

- *Type:* string[]

---

##### `TokenEndpointAuthMethodInput`<sup>Optional</sup> <a name="TokenEndpointAuthMethodInput" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.property.tokenEndpointAuthMethodInput"></a>

```csharp
public string TokenEndpointAuthMethodInput { get; }
```

- *Type:* string

---

##### `TosUriInput`<sup>Optional</sup> <a name="TosUriInput" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.property.tosUriInput"></a>

```csharp
public string TosUriInput { get; }
```

- *Type:* string

---

##### `VisibilityInput`<sup>Optional</sup> <a name="VisibilityInput" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.property.visibilityInput"></a>

```csharp
public string VisibilityInput { get; }
```

- *Type:* string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.property.accountId"></a>

```csharp
public string AccountId { get; }
```

- *Type:* string

---

##### `AllowedCorsOrigins`<sup>Required</sup> <a name="AllowedCorsOrigins" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.property.allowedCorsOrigins"></a>

```csharp
public string[] AllowedCorsOrigins { get; }
```

- *Type:* string[]

---

##### `ClientName`<sup>Required</sup> <a name="ClientName" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.property.clientName"></a>

```csharp
public string ClientName { get; }
```

- *Type:* string

---

##### `ClientUri`<sup>Required</sup> <a name="ClientUri" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.property.clientUri"></a>

```csharp
public string ClientUri { get; }
```

- *Type:* string

---

##### `GrantTypes`<sup>Required</sup> <a name="GrantTypes" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.property.grantTypes"></a>

```csharp
public string[] GrantTypes { get; }
```

- *Type:* string[]

---

##### `LogoUri`<sup>Required</sup> <a name="LogoUri" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.property.logoUri"></a>

```csharp
public string LogoUri { get; }
```

- *Type:* string

---

##### `OauthClientId`<sup>Required</sup> <a name="OauthClientId" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.property.oauthClientId"></a>

```csharp
public string OauthClientId { get; }
```

- *Type:* string

---

##### `PolicyUri`<sup>Required</sup> <a name="PolicyUri" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.property.policyUri"></a>

```csharp
public string PolicyUri { get; }
```

- *Type:* string

---

##### `PostLogoutRedirectUris`<sup>Required</sup> <a name="PostLogoutRedirectUris" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.property.postLogoutRedirectUris"></a>

```csharp
public string[] PostLogoutRedirectUris { get; }
```

- *Type:* string[]

---

##### `RedirectUris`<sup>Required</sup> <a name="RedirectUris" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.property.redirectUris"></a>

```csharp
public string[] RedirectUris { get; }
```

- *Type:* string[]

---

##### `ResponseTypes`<sup>Required</sup> <a name="ResponseTypes" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.property.responseTypes"></a>

```csharp
public string[] ResponseTypes { get; }
```

- *Type:* string[]

---

##### `Scopes`<sup>Required</sup> <a name="Scopes" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.property.scopes"></a>

```csharp
public string[] Scopes { get; }
```

- *Type:* string[]

---

##### `TokenEndpointAuthMethod`<sup>Required</sup> <a name="TokenEndpointAuthMethod" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.property.tokenEndpointAuthMethod"></a>

```csharp
public string TokenEndpointAuthMethod { get; }
```

- *Type:* string

---

##### `TosUri`<sup>Required</sup> <a name="TosUri" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.property.tosUri"></a>

```csharp
public string TosUri { get; }
```

- *Type:* string

---

##### `Visibility`<sup>Required</sup> <a name="Visibility" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.property.visibility"></a>

```csharp
public string Visibility { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClient.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-cloudflare.oauthClient.OauthClient.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### OauthClientClientUriVerification <a name="OauthClientClientUriVerification" id="@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerification.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new OauthClientClientUriVerification {

};
```


### OauthClientConfig <a name="OauthClientConfig" id="@cdktn/provider-cloudflare.oauthClient.OauthClientConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.oauthClient.OauthClientConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new OauthClientConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string AccountId,
    string ClientName,
    string[] GrantTypes,
    string[] RedirectUris,
    string[] ResponseTypes,
    string[] Scopes,
    string TokenEndpointAuthMethod,
    string[] AllowedCorsOrigins = null,
    string ClientUri = null,
    string LogoUri = null,
    string OauthClientId = null,
    string PolicyUri = null,
    string[] PostLogoutRedirectUris = null,
    string TosUri = null,
    string Visibility = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClientConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClientConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClientConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClientConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClientConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClientConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClientConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClientConfig.property.accountId">AccountId</a></code> | <code>string</code> | Account identifier tag. |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClientConfig.property.clientName">ClientName</a></code> | <code>string</code> | Human-readable name of the OAuth client. |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClientConfig.property.grantTypes">GrantTypes</a></code> | <code>string[]</code> | Array of OAuth grant types the client is allowed to use. `authorization_code` is required; `refresh_token` may be included optionally. |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClientConfig.property.redirectUris">RedirectUris</a></code> | <code>string[]</code> | Array of allowed redirect URIs for the client. |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClientConfig.property.responseTypes">ResponseTypes</a></code> | <code>string[]</code> | Array of OAuth response types the client is allowed to use. |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClientConfig.property.scopes">Scopes</a></code> | <code>string[]</code> | Array of OAuth scopes the client is allowed to request. |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClientConfig.property.tokenEndpointAuthMethod">TokenEndpointAuthMethod</a></code> | <code>string</code> | The authentication method the client uses at the token endpoint. Available values: "none", "client_secret_basic", "client_secret_post". |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClientConfig.property.allowedCorsOrigins">AllowedCorsOrigins</a></code> | <code>string[]</code> | Array of allowed CORS origins. |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClientConfig.property.clientUri">ClientUri</a></code> | <code>string</code> | URL of the home page of the client. |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClientConfig.property.logoUri">LogoUri</a></code> | <code>string</code> | URL of the client's logo. |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClientConfig.property.oauthClientId">OauthClientId</a></code> | <code>string</code> | The unique identifier for an OAuth client. |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClientConfig.property.policyUri">PolicyUri</a></code> | <code>string</code> | URL that points to a privacy policy document. |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClientConfig.property.postLogoutRedirectUris">PostLogoutRedirectUris</a></code> | <code>string[]</code> | Array of allowed post-logout redirect URIs. |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClientConfig.property.tosUri">TosUri</a></code> | <code>string</code> | URL that points to a terms of service document. |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClientConfig.property.visibility">Visibility</a></code> | <code>string</code> | Promote the OAuth client from private to public visibility. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-cloudflare.oauthClient.OauthClientConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.oauthClient.OauthClientConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.oauthClient.OauthClientConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.oauthClient.OauthClientConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.oauthClient.OauthClientConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.oauthClient.OauthClientConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-cloudflare.oauthClient.OauthClientConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-cloudflare.oauthClient.OauthClientConfig.property.accountId"></a>

```csharp
public string AccountId { get; set; }
```

- *Type:* string

Account identifier tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/oauth_client#account_id OauthClient#account_id}

---

##### `ClientName`<sup>Required</sup> <a name="ClientName" id="@cdktn/provider-cloudflare.oauthClient.OauthClientConfig.property.clientName"></a>

```csharp
public string ClientName { get; set; }
```

- *Type:* string

Human-readable name of the OAuth client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/oauth_client#client_name OauthClient#client_name}

---

##### `GrantTypes`<sup>Required</sup> <a name="GrantTypes" id="@cdktn/provider-cloudflare.oauthClient.OauthClientConfig.property.grantTypes"></a>

```csharp
public string[] GrantTypes { get; set; }
```

- *Type:* string[]

Array of OAuth grant types the client is allowed to use. `authorization_code` is required; `refresh_token` may be included optionally.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/oauth_client#grant_types OauthClient#grant_types}

---

##### `RedirectUris`<sup>Required</sup> <a name="RedirectUris" id="@cdktn/provider-cloudflare.oauthClient.OauthClientConfig.property.redirectUris"></a>

```csharp
public string[] RedirectUris { get; set; }
```

- *Type:* string[]

Array of allowed redirect URIs for the client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/oauth_client#redirect_uris OauthClient#redirect_uris}

---

##### `ResponseTypes`<sup>Required</sup> <a name="ResponseTypes" id="@cdktn/provider-cloudflare.oauthClient.OauthClientConfig.property.responseTypes"></a>

```csharp
public string[] ResponseTypes { get; set; }
```

- *Type:* string[]

Array of OAuth response types the client is allowed to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/oauth_client#response_types OauthClient#response_types}

---

##### `Scopes`<sup>Required</sup> <a name="Scopes" id="@cdktn/provider-cloudflare.oauthClient.OauthClientConfig.property.scopes"></a>

```csharp
public string[] Scopes { get; set; }
```

- *Type:* string[]

Array of OAuth scopes the client is allowed to request.

Colon-delimited scopes are not accepted. Dot-delimited scopes are validated against available OAuth API scopes; simple identity scopes are allowed. Protocol scopes `offline_access` and `openid` are added or removed automatically based on `grant_types` and `response_types`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/oauth_client#scopes OauthClient#scopes}

---

##### `TokenEndpointAuthMethod`<sup>Required</sup> <a name="TokenEndpointAuthMethod" id="@cdktn/provider-cloudflare.oauthClient.OauthClientConfig.property.tokenEndpointAuthMethod"></a>

```csharp
public string TokenEndpointAuthMethod { get; set; }
```

- *Type:* string

The authentication method the client uses at the token endpoint. Available values: "none", "client_secret_basic", "client_secret_post".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/oauth_client#token_endpoint_auth_method OauthClient#token_endpoint_auth_method}

---

##### `AllowedCorsOrigins`<sup>Optional</sup> <a name="AllowedCorsOrigins" id="@cdktn/provider-cloudflare.oauthClient.OauthClientConfig.property.allowedCorsOrigins"></a>

```csharp
public string[] AllowedCorsOrigins { get; set; }
```

- *Type:* string[]

Array of allowed CORS origins.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/oauth_client#allowed_cors_origins OauthClient#allowed_cors_origins}

---

##### `ClientUri`<sup>Optional</sup> <a name="ClientUri" id="@cdktn/provider-cloudflare.oauthClient.OauthClientConfig.property.clientUri"></a>

```csharp
public string ClientUri { get; set; }
```

- *Type:* string

URL of the home page of the client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/oauth_client#client_uri OauthClient#client_uri}

---

##### `LogoUri`<sup>Optional</sup> <a name="LogoUri" id="@cdktn/provider-cloudflare.oauthClient.OauthClientConfig.property.logoUri"></a>

```csharp
public string LogoUri { get; set; }
```

- *Type:* string

URL of the client's logo.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/oauth_client#logo_uri OauthClient#logo_uri}

---

##### `OauthClientId`<sup>Optional</sup> <a name="OauthClientId" id="@cdktn/provider-cloudflare.oauthClient.OauthClientConfig.property.oauthClientId"></a>

```csharp
public string OauthClientId { get; set; }
```

- *Type:* string

The unique identifier for an OAuth client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/oauth_client#oauth_client_id OauthClient#oauth_client_id}

---

##### `PolicyUri`<sup>Optional</sup> <a name="PolicyUri" id="@cdktn/provider-cloudflare.oauthClient.OauthClientConfig.property.policyUri"></a>

```csharp
public string PolicyUri { get; set; }
```

- *Type:* string

URL that points to a privacy policy document.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/oauth_client#policy_uri OauthClient#policy_uri}

---

##### `PostLogoutRedirectUris`<sup>Optional</sup> <a name="PostLogoutRedirectUris" id="@cdktn/provider-cloudflare.oauthClient.OauthClientConfig.property.postLogoutRedirectUris"></a>

```csharp
public string[] PostLogoutRedirectUris { get; set; }
```

- *Type:* string[]

Array of allowed post-logout redirect URIs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/oauth_client#post_logout_redirect_uris OauthClient#post_logout_redirect_uris}

---

##### `TosUri`<sup>Optional</sup> <a name="TosUri" id="@cdktn/provider-cloudflare.oauthClient.OauthClientConfig.property.tosUri"></a>

```csharp
public string TosUri { get; set; }
```

- *Type:* string

URL that points to a terms of service document.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/oauth_client#tos_uri OauthClient#tos_uri}

---

##### `Visibility`<sup>Optional</sup> <a name="Visibility" id="@cdktn/provider-cloudflare.oauthClient.OauthClientConfig.property.visibility"></a>

```csharp
public string Visibility { get; set; }
```

- *Type:* string

Promote the OAuth client from private to public visibility.

Only `public` is accepted; demotion to `private` is not supported. Promotion requires a non-empty client name, logo URI, verified client URI host, and at least one non-identity scope.
Available values: "public".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/oauth_client#visibility OauthClient#visibility}

---

## Classes <a name="Classes" id="Classes"></a>

### OauthClientClientUriVerificationOutputReference <a name="OauthClientClientUriVerificationOutputReference" id="@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerificationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new OauthClientClientUriVerificationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerificationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerificationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerificationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerificationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerificationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerificationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerificationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerificationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerificationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerificationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerificationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerificationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerificationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerificationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerificationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerificationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerificationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerificationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerificationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerificationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerificationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerificationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerificationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerificationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerificationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerificationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerificationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerificationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerificationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerificationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerificationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerificationOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerificationOutputReference.property.text">Text</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerificationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerification">OauthClientClientUriVerification</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerificationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerificationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerificationOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `Text`<sup>Required</sup> <a name="Text" id="@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerificationOutputReference.property.text"></a>

```csharp
public string Text { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerificationOutputReference.property.internalValue"></a>

```csharp
public OauthClientClientUriVerification InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.oauthClient.OauthClientClientUriVerification">OauthClientClientUriVerification</a>

---



