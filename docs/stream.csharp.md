# `stream` Submodule <a name="`stream` Submodule" id="@cdktn/provider-cloudflare.stream"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Stream <a name="Stream" id="@cdktn/provider-cloudflare.stream.Stream"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/stream cloudflare_stream}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.stream.Stream.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new Stream(Construct Scope, string Id, StreamConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.stream.Stream.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.stream.Stream.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.stream.Stream.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-cloudflare.stream.StreamConfig">StreamConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-cloudflare.stream.Stream.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.stream.Stream.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktn/provider-cloudflare.stream.Stream.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.stream.StreamConfig">StreamConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.stream.Stream.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.stream.Stream.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.stream.Stream.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.stream.Stream.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.stream.Stream.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.stream.Stream.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.stream.Stream.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.stream.Stream.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.stream.Stream.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-cloudflare.stream.Stream.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.stream.Stream.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.stream.Stream.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.stream.Stream.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.stream.Stream.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.stream.Stream.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.stream.Stream.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.stream.Stream.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.stream.Stream.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.stream.Stream.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.stream.Stream.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.stream.Stream.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.stream.Stream.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-cloudflare.stream.Stream.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-cloudflare.stream.Stream.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-cloudflare.stream.Stream.putPublicDetails">PutPublicDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.stream.Stream.resetAccountId">ResetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.stream.Stream.resetAllowedOrigins">ResetAllowedOrigins</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.stream.Stream.resetCreator">ResetCreator</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.stream.Stream.resetIdentifier">ResetIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.stream.Stream.resetMaxDurationSeconds">ResetMaxDurationSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.stream.Stream.resetMeta">ResetMeta</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.stream.Stream.resetPublicDetails">ResetPublicDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.stream.Stream.resetRequireSignedUrls">ResetRequireSignedUrls</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.stream.Stream.resetScheduledDeletion">ResetScheduledDeletion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.stream.Stream.resetThumbnailTimestampPct">ResetThumbnailTimestampPct</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.stream.Stream.resetUid">ResetUid</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.stream.Stream.resetUploadExpiry">ResetUploadExpiry</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.stream.Stream.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-cloudflare.stream.Stream.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-cloudflare.stream.Stream.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-cloudflare.stream.Stream.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-cloudflare.stream.Stream.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-cloudflare.stream.Stream.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-cloudflare.stream.Stream.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-cloudflare.stream.Stream.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-cloudflare.stream.Stream.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-cloudflare.stream.Stream.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-cloudflare.stream.Stream.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-cloudflare.stream.Stream.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-cloudflare.stream.Stream.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-cloudflare.stream.Stream.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.stream.Stream.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.stream.Stream.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.stream.Stream.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.stream.Stream.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.stream.Stream.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.stream.Stream.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.stream.Stream.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.stream.Stream.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.stream.Stream.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.stream.Stream.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.stream.Stream.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.stream.Stream.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.stream.Stream.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.stream.Stream.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.stream.Stream.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.stream.Stream.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.stream.Stream.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.stream.Stream.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-cloudflare.stream.Stream.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-cloudflare.stream.Stream.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.stream.Stream.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.stream.Stream.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.stream.Stream.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.stream.Stream.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-cloudflare.stream.Stream.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.stream.Stream.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-cloudflare.stream.Stream.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-cloudflare.stream.Stream.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-cloudflare.stream.Stream.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-cloudflare.stream.Stream.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.stream.Stream.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutPublicDetails` <a name="PutPublicDetails" id="@cdktn/provider-cloudflare.stream.Stream.putPublicDetails"></a>

```csharp
private void PutPublicDetails(StreamPublicDetails Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-cloudflare.stream.Stream.putPublicDetails.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.stream.StreamPublicDetails">StreamPublicDetails</a>

---

##### `ResetAccountId` <a name="ResetAccountId" id="@cdktn/provider-cloudflare.stream.Stream.resetAccountId"></a>

```csharp
private void ResetAccountId()
```

##### `ResetAllowedOrigins` <a name="ResetAllowedOrigins" id="@cdktn/provider-cloudflare.stream.Stream.resetAllowedOrigins"></a>

```csharp
private void ResetAllowedOrigins()
```

##### `ResetCreator` <a name="ResetCreator" id="@cdktn/provider-cloudflare.stream.Stream.resetCreator"></a>

```csharp
private void ResetCreator()
```

##### `ResetIdentifier` <a name="ResetIdentifier" id="@cdktn/provider-cloudflare.stream.Stream.resetIdentifier"></a>

```csharp
private void ResetIdentifier()
```

##### `ResetMaxDurationSeconds` <a name="ResetMaxDurationSeconds" id="@cdktn/provider-cloudflare.stream.Stream.resetMaxDurationSeconds"></a>

```csharp
private void ResetMaxDurationSeconds()
```

##### `ResetMeta` <a name="ResetMeta" id="@cdktn/provider-cloudflare.stream.Stream.resetMeta"></a>

```csharp
private void ResetMeta()
```

##### `ResetPublicDetails` <a name="ResetPublicDetails" id="@cdktn/provider-cloudflare.stream.Stream.resetPublicDetails"></a>

```csharp
private void ResetPublicDetails()
```

##### `ResetRequireSignedUrls` <a name="ResetRequireSignedUrls" id="@cdktn/provider-cloudflare.stream.Stream.resetRequireSignedUrls"></a>

```csharp
private void ResetRequireSignedUrls()
```

##### `ResetScheduledDeletion` <a name="ResetScheduledDeletion" id="@cdktn/provider-cloudflare.stream.Stream.resetScheduledDeletion"></a>

```csharp
private void ResetScheduledDeletion()
```

##### `ResetThumbnailTimestampPct` <a name="ResetThumbnailTimestampPct" id="@cdktn/provider-cloudflare.stream.Stream.resetThumbnailTimestampPct"></a>

```csharp
private void ResetThumbnailTimestampPct()
```

##### `ResetUid` <a name="ResetUid" id="@cdktn/provider-cloudflare.stream.Stream.resetUid"></a>

```csharp
private void ResetUid()
```

##### `ResetUploadExpiry` <a name="ResetUploadExpiry" id="@cdktn/provider-cloudflare.stream.Stream.resetUploadExpiry"></a>

```csharp
private void ResetUploadExpiry()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.stream.Stream.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.stream.Stream.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.stream.Stream.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.stream.Stream.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a Stream resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-cloudflare.stream.Stream.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

Stream.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-cloudflare.stream.Stream.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-cloudflare.stream.Stream.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

Stream.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-cloudflare.stream.Stream.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-cloudflare.stream.Stream.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

Stream.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-cloudflare.stream.Stream.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-cloudflare.stream.Stream.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

Stream.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a Stream resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-cloudflare.stream.Stream.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-cloudflare.stream.Stream.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Stream to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-cloudflare.stream.Stream.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Stream that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/stream#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.stream.Stream.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the Stream to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.stream.Stream.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.stream.Stream.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.stream.Stream.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.stream.Stream.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.stream.Stream.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.stream.Stream.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.stream.Stream.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.stream.Stream.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.stream.Stream.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.stream.Stream.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.stream.Stream.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.stream.Stream.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.stream.Stream.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.stream.Stream.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.stream.Stream.property.clippedFrom">ClippedFrom</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.stream.Stream.property.created">Created</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.stream.Stream.property.duration">Duration</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.stream.Stream.property.input">Input</a></code> | <code><a href="#@cdktn/provider-cloudflare.stream.StreamInputOutputReference">StreamInputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.stream.Stream.property.liveInput">LiveInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.stream.Stream.property.maxSizeBytes">MaxSizeBytes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.stream.Stream.property.modified">Modified</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.stream.Stream.property.playback">Playback</a></code> | <code><a href="#@cdktn/provider-cloudflare.stream.StreamPlaybackOutputReference">StreamPlaybackOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.stream.Stream.property.preview">Preview</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.stream.Stream.property.publicDetails">PublicDetails</a></code> | <code><a href="#@cdktn/provider-cloudflare.stream.StreamPublicDetailsOutputReference">StreamPublicDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.stream.Stream.property.readyToStream">ReadyToStream</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.stream.Stream.property.readyToStreamAt">ReadyToStreamAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.stream.Stream.property.size">Size</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.stream.Stream.property.status">Status</a></code> | <code><a href="#@cdktn/provider-cloudflare.stream.StreamStatusOutputReference">StreamStatusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.stream.Stream.property.thumbnail">Thumbnail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.stream.Stream.property.uploaded">Uploaded</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.stream.Stream.property.watermark">Watermark</a></code> | <code><a href="#@cdktn/provider-cloudflare.stream.StreamWatermarkOutputReference">StreamWatermarkOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.stream.Stream.property.accountIdInput">AccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.stream.Stream.property.allowedOriginsInput">AllowedOriginsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.stream.Stream.property.creatorInput">CreatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.stream.Stream.property.identifierInput">IdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.stream.Stream.property.maxDurationSecondsInput">MaxDurationSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.stream.Stream.property.metaInput">MetaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.stream.Stream.property.publicDetailsInput">PublicDetailsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.stream.StreamPublicDetails">StreamPublicDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.stream.Stream.property.requireSignedUrlsInput">RequireSignedUrlsInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.stream.Stream.property.scheduledDeletionInput">ScheduledDeletionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.stream.Stream.property.thumbnailTimestampPctInput">ThumbnailTimestampPctInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.stream.Stream.property.uidInput">UidInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.stream.Stream.property.uploadExpiryInput">UploadExpiryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.stream.Stream.property.accountId">AccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.stream.Stream.property.allowedOrigins">AllowedOrigins</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.stream.Stream.property.creator">Creator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.stream.Stream.property.identifier">Identifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.stream.Stream.property.maxDurationSeconds">MaxDurationSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.stream.Stream.property.meta">Meta</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.stream.Stream.property.requireSignedUrls">RequireSignedUrls</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.stream.Stream.property.scheduledDeletion">ScheduledDeletion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.stream.Stream.property.thumbnailTimestampPct">ThumbnailTimestampPct</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.stream.Stream.property.uid">Uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.stream.Stream.property.uploadExpiry">UploadExpiry</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-cloudflare.stream.Stream.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-cloudflare.stream.Stream.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.stream.Stream.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-cloudflare.stream.Stream.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-cloudflare.stream.Stream.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-cloudflare.stream.Stream.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-cloudflare.stream.Stream.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-cloudflare.stream.Stream.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.stream.Stream.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.stream.Stream.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.stream.Stream.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.stream.Stream.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.stream.Stream.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-cloudflare.stream.Stream.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ClippedFrom`<sup>Required</sup> <a name="ClippedFrom" id="@cdktn/provider-cloudflare.stream.Stream.property.clippedFrom"></a>

```csharp
public string ClippedFrom { get; }
```

- *Type:* string

---

##### `Created`<sup>Required</sup> <a name="Created" id="@cdktn/provider-cloudflare.stream.Stream.property.created"></a>

```csharp
public string Created { get; }
```

- *Type:* string

---

##### `Duration`<sup>Required</sup> <a name="Duration" id="@cdktn/provider-cloudflare.stream.Stream.property.duration"></a>

```csharp
public double Duration { get; }
```

- *Type:* double

---

##### `Input`<sup>Required</sup> <a name="Input" id="@cdktn/provider-cloudflare.stream.Stream.property.input"></a>

```csharp
public StreamInputOutputReference Input { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.stream.StreamInputOutputReference">StreamInputOutputReference</a>

---

##### `LiveInput`<sup>Required</sup> <a name="LiveInput" id="@cdktn/provider-cloudflare.stream.Stream.property.liveInput"></a>

```csharp
public string LiveInput { get; }
```

- *Type:* string

---

##### `MaxSizeBytes`<sup>Required</sup> <a name="MaxSizeBytes" id="@cdktn/provider-cloudflare.stream.Stream.property.maxSizeBytes"></a>

```csharp
public double MaxSizeBytes { get; }
```

- *Type:* double

---

##### `Modified`<sup>Required</sup> <a name="Modified" id="@cdktn/provider-cloudflare.stream.Stream.property.modified"></a>

```csharp
public string Modified { get; }
```

- *Type:* string

---

##### `Playback`<sup>Required</sup> <a name="Playback" id="@cdktn/provider-cloudflare.stream.Stream.property.playback"></a>

```csharp
public StreamPlaybackOutputReference Playback { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.stream.StreamPlaybackOutputReference">StreamPlaybackOutputReference</a>

---

##### `Preview`<sup>Required</sup> <a name="Preview" id="@cdktn/provider-cloudflare.stream.Stream.property.preview"></a>

```csharp
public string Preview { get; }
```

- *Type:* string

---

##### `PublicDetails`<sup>Required</sup> <a name="PublicDetails" id="@cdktn/provider-cloudflare.stream.Stream.property.publicDetails"></a>

```csharp
public StreamPublicDetailsOutputReference PublicDetails { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.stream.StreamPublicDetailsOutputReference">StreamPublicDetailsOutputReference</a>

---

##### `ReadyToStream`<sup>Required</sup> <a name="ReadyToStream" id="@cdktn/provider-cloudflare.stream.Stream.property.readyToStream"></a>

```csharp
public IResolvable ReadyToStream { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `ReadyToStreamAt`<sup>Required</sup> <a name="ReadyToStreamAt" id="@cdktn/provider-cloudflare.stream.Stream.property.readyToStreamAt"></a>

```csharp
public string ReadyToStreamAt { get; }
```

- *Type:* string

---

##### `Size`<sup>Required</sup> <a name="Size" id="@cdktn/provider-cloudflare.stream.Stream.property.size"></a>

```csharp
public double Size { get; }
```

- *Type:* double

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-cloudflare.stream.Stream.property.status"></a>

```csharp
public StreamStatusOutputReference Status { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.stream.StreamStatusOutputReference">StreamStatusOutputReference</a>

---

##### `Thumbnail`<sup>Required</sup> <a name="Thumbnail" id="@cdktn/provider-cloudflare.stream.Stream.property.thumbnail"></a>

```csharp
public string Thumbnail { get; }
```

- *Type:* string

---

##### `Uploaded`<sup>Required</sup> <a name="Uploaded" id="@cdktn/provider-cloudflare.stream.Stream.property.uploaded"></a>

```csharp
public string Uploaded { get; }
```

- *Type:* string

---

##### `Watermark`<sup>Required</sup> <a name="Watermark" id="@cdktn/provider-cloudflare.stream.Stream.property.watermark"></a>

```csharp
public StreamWatermarkOutputReference Watermark { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.stream.StreamWatermarkOutputReference">StreamWatermarkOutputReference</a>

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktn/provider-cloudflare.stream.Stream.property.accountIdInput"></a>

```csharp
public string AccountIdInput { get; }
```

- *Type:* string

---

##### `AllowedOriginsInput`<sup>Optional</sup> <a name="AllowedOriginsInput" id="@cdktn/provider-cloudflare.stream.Stream.property.allowedOriginsInput"></a>

```csharp
public string[] AllowedOriginsInput { get; }
```

- *Type:* string[]

---

##### `CreatorInput`<sup>Optional</sup> <a name="CreatorInput" id="@cdktn/provider-cloudflare.stream.Stream.property.creatorInput"></a>

```csharp
public string CreatorInput { get; }
```

- *Type:* string

---

##### `IdentifierInput`<sup>Optional</sup> <a name="IdentifierInput" id="@cdktn/provider-cloudflare.stream.Stream.property.identifierInput"></a>

```csharp
public string IdentifierInput { get; }
```

- *Type:* string

---

##### `MaxDurationSecondsInput`<sup>Optional</sup> <a name="MaxDurationSecondsInput" id="@cdktn/provider-cloudflare.stream.Stream.property.maxDurationSecondsInput"></a>

```csharp
public double MaxDurationSecondsInput { get; }
```

- *Type:* double

---

##### `MetaInput`<sup>Optional</sup> <a name="MetaInput" id="@cdktn/provider-cloudflare.stream.Stream.property.metaInput"></a>

```csharp
public string MetaInput { get; }
```

- *Type:* string

---

##### `PublicDetailsInput`<sup>Optional</sup> <a name="PublicDetailsInput" id="@cdktn/provider-cloudflare.stream.Stream.property.publicDetailsInput"></a>

```csharp
public IResolvable|StreamPublicDetails PublicDetailsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.stream.StreamPublicDetails">StreamPublicDetails</a>

---

##### `RequireSignedUrlsInput`<sup>Optional</sup> <a name="RequireSignedUrlsInput" id="@cdktn/provider-cloudflare.stream.Stream.property.requireSignedUrlsInput"></a>

```csharp
public bool|IResolvable RequireSignedUrlsInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ScheduledDeletionInput`<sup>Optional</sup> <a name="ScheduledDeletionInput" id="@cdktn/provider-cloudflare.stream.Stream.property.scheduledDeletionInput"></a>

```csharp
public string ScheduledDeletionInput { get; }
```

- *Type:* string

---

##### `ThumbnailTimestampPctInput`<sup>Optional</sup> <a name="ThumbnailTimestampPctInput" id="@cdktn/provider-cloudflare.stream.Stream.property.thumbnailTimestampPctInput"></a>

```csharp
public double ThumbnailTimestampPctInput { get; }
```

- *Type:* double

---

##### `UidInput`<sup>Optional</sup> <a name="UidInput" id="@cdktn/provider-cloudflare.stream.Stream.property.uidInput"></a>

```csharp
public string UidInput { get; }
```

- *Type:* string

---

##### `UploadExpiryInput`<sup>Optional</sup> <a name="UploadExpiryInput" id="@cdktn/provider-cloudflare.stream.Stream.property.uploadExpiryInput"></a>

```csharp
public string UploadExpiryInput { get; }
```

- *Type:* string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-cloudflare.stream.Stream.property.accountId"></a>

```csharp
public string AccountId { get; }
```

- *Type:* string

---

##### `AllowedOrigins`<sup>Required</sup> <a name="AllowedOrigins" id="@cdktn/provider-cloudflare.stream.Stream.property.allowedOrigins"></a>

```csharp
public string[] AllowedOrigins { get; }
```

- *Type:* string[]

---

##### `Creator`<sup>Required</sup> <a name="Creator" id="@cdktn/provider-cloudflare.stream.Stream.property.creator"></a>

```csharp
public string Creator { get; }
```

- *Type:* string

---

##### `Identifier`<sup>Required</sup> <a name="Identifier" id="@cdktn/provider-cloudflare.stream.Stream.property.identifier"></a>

```csharp
public string Identifier { get; }
```

- *Type:* string

---

##### `MaxDurationSeconds`<sup>Required</sup> <a name="MaxDurationSeconds" id="@cdktn/provider-cloudflare.stream.Stream.property.maxDurationSeconds"></a>

```csharp
public double MaxDurationSeconds { get; }
```

- *Type:* double

---

##### `Meta`<sup>Required</sup> <a name="Meta" id="@cdktn/provider-cloudflare.stream.Stream.property.meta"></a>

```csharp
public string Meta { get; }
```

- *Type:* string

---

##### `RequireSignedUrls`<sup>Required</sup> <a name="RequireSignedUrls" id="@cdktn/provider-cloudflare.stream.Stream.property.requireSignedUrls"></a>

```csharp
public bool|IResolvable RequireSignedUrls { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ScheduledDeletion`<sup>Required</sup> <a name="ScheduledDeletion" id="@cdktn/provider-cloudflare.stream.Stream.property.scheduledDeletion"></a>

```csharp
public string ScheduledDeletion { get; }
```

- *Type:* string

---

##### `ThumbnailTimestampPct`<sup>Required</sup> <a name="ThumbnailTimestampPct" id="@cdktn/provider-cloudflare.stream.Stream.property.thumbnailTimestampPct"></a>

```csharp
public double ThumbnailTimestampPct { get; }
```

- *Type:* double

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktn/provider-cloudflare.stream.Stream.property.uid"></a>

```csharp
public string Uid { get; }
```

- *Type:* string

---

##### `UploadExpiry`<sup>Required</sup> <a name="UploadExpiry" id="@cdktn/provider-cloudflare.stream.Stream.property.uploadExpiry"></a>

```csharp
public string UploadExpiry { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.stream.Stream.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-cloudflare.stream.Stream.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### StreamConfig <a name="StreamConfig" id="@cdktn/provider-cloudflare.stream.StreamConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.stream.StreamConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new StreamConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string AccountId = null,
    string[] AllowedOrigins = null,
    string Creator = null,
    string Identifier = null,
    double MaxDurationSeconds = null,
    string Meta = null,
    StreamPublicDetails PublicDetails = null,
    bool|IResolvable RequireSignedUrls = null,
    string ScheduledDeletion = null,
    double ThumbnailTimestampPct = null,
    string Uid = null,
    string UploadExpiry = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.stream.StreamConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.stream.StreamConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.stream.StreamConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.stream.StreamConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.stream.StreamConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.stream.StreamConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.stream.StreamConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.stream.StreamConfig.property.accountId">AccountId</a></code> | <code>string</code> | The account identifier tag. |
| <code><a href="#@cdktn/provider-cloudflare.stream.StreamConfig.property.allowedOrigins">AllowedOrigins</a></code> | <code>string[]</code> | Lists the origins allowed to display the video. |
| <code><a href="#@cdktn/provider-cloudflare.stream.StreamConfig.property.creator">Creator</a></code> | <code>string</code> | A user-defined identifier for the media creator. |
| <code><a href="#@cdktn/provider-cloudflare.stream.StreamConfig.property.identifier">Identifier</a></code> | <code>string</code> | A Cloudflare-generated unique identifier for a media item. |
| <code><a href="#@cdktn/provider-cloudflare.stream.StreamConfig.property.maxDurationSeconds">MaxDurationSeconds</a></code> | <code>double</code> | The maximum duration in seconds for a video upload. |
| <code><a href="#@cdktn/provider-cloudflare.stream.StreamConfig.property.meta">Meta</a></code> | <code>string</code> | A user modifiable key-value store used to reference other systems of record for managing videos. |
| <code><a href="#@cdktn/provider-cloudflare.stream.StreamConfig.property.publicDetails">PublicDetails</a></code> | <code><a href="#@cdktn/provider-cloudflare.stream.StreamPublicDetails">StreamPublicDetails</a></code> | Public details for the video including title, share link, channel link, and logo. |
| <code><a href="#@cdktn/provider-cloudflare.stream.StreamConfig.property.requireSignedUrls">RequireSignedUrls</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Indicates whether the video can be a accessed using the UID. |
| <code><a href="#@cdktn/provider-cloudflare.stream.StreamConfig.property.scheduledDeletion">ScheduledDeletion</a></code> | <code>string</code> | Indicates the date and time at which the video will be deleted. |
| <code><a href="#@cdktn/provider-cloudflare.stream.StreamConfig.property.thumbnailTimestampPct">ThumbnailTimestampPct</a></code> | <code>double</code> | The timestamp for a thumbnail image calculated as a percentage value of the video's duration. |
| <code><a href="#@cdktn/provider-cloudflare.stream.StreamConfig.property.uid">Uid</a></code> | <code>string</code> | The unique identifier for the video. Can be used to verify the video being updated. |
| <code><a href="#@cdktn/provider-cloudflare.stream.StreamConfig.property.uploadExpiry">UploadExpiry</a></code> | <code>string</code> | The date and time when the video upload URL is no longer valid for direct user uploads. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-cloudflare.stream.StreamConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.stream.StreamConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.stream.StreamConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.stream.StreamConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.stream.StreamConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.stream.StreamConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-cloudflare.stream.StreamConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AccountId`<sup>Optional</sup> <a name="AccountId" id="@cdktn/provider-cloudflare.stream.StreamConfig.property.accountId"></a>

```csharp
public string AccountId { get; set; }
```

- *Type:* string

The account identifier tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/stream#account_id Stream#account_id}

---

##### `AllowedOrigins`<sup>Optional</sup> <a name="AllowedOrigins" id="@cdktn/provider-cloudflare.stream.StreamConfig.property.allowedOrigins"></a>

```csharp
public string[] AllowedOrigins { get; set; }
```

- *Type:* string[]

Lists the origins allowed to display the video.

Enter allowed origin domains in an array and use `*` for wildcard subdomains. Empty arrays allow the video to be viewed on any origin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/stream#allowed_origins Stream#allowed_origins}

---

##### `Creator`<sup>Optional</sup> <a name="Creator" id="@cdktn/provider-cloudflare.stream.StreamConfig.property.creator"></a>

```csharp
public string Creator { get; set; }
```

- *Type:* string

A user-defined identifier for the media creator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/stream#creator Stream#creator}

---

##### `Identifier`<sup>Optional</sup> <a name="Identifier" id="@cdktn/provider-cloudflare.stream.StreamConfig.property.identifier"></a>

```csharp
public string Identifier { get; set; }
```

- *Type:* string

A Cloudflare-generated unique identifier for a media item.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/stream#identifier Stream#identifier}

---

##### `MaxDurationSeconds`<sup>Optional</sup> <a name="MaxDurationSeconds" id="@cdktn/provider-cloudflare.stream.StreamConfig.property.maxDurationSeconds"></a>

```csharp
public double MaxDurationSeconds { get; set; }
```

- *Type:* double

The maximum duration in seconds for a video upload.

Can be set for a video that is not yet uploaded to limit its duration. Uploads that exceed the specified duration will fail during processing. A value of `-1` means the value is unknown.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/stream#max_duration_seconds Stream#max_duration_seconds}

---

##### `Meta`<sup>Optional</sup> <a name="Meta" id="@cdktn/provider-cloudflare.stream.StreamConfig.property.meta"></a>

```csharp
public string Meta { get; set; }
```

- *Type:* string

A user modifiable key-value store used to reference other systems of record for managing videos.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/stream#meta Stream#meta}

---

##### `PublicDetails`<sup>Optional</sup> <a name="PublicDetails" id="@cdktn/provider-cloudflare.stream.StreamConfig.property.publicDetails"></a>

```csharp
public StreamPublicDetails PublicDetails { get; set; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.stream.StreamPublicDetails">StreamPublicDetails</a>

Public details for the video including title, share link, channel link, and logo.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/stream#public_details Stream#public_details}

---

##### `RequireSignedUrls`<sup>Optional</sup> <a name="RequireSignedUrls" id="@cdktn/provider-cloudflare.stream.StreamConfig.property.requireSignedUrls"></a>

```csharp
public bool|IResolvable RequireSignedUrls { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Indicates whether the video can be a accessed using the UID.

When set to `true`, a signed token must be generated with a signing key to view the video.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/stream#require_signed_urls Stream#require_signed_urls}

---

##### `ScheduledDeletion`<sup>Optional</sup> <a name="ScheduledDeletion" id="@cdktn/provider-cloudflare.stream.StreamConfig.property.scheduledDeletion"></a>

```csharp
public string ScheduledDeletion { get; set; }
```

- *Type:* string

Indicates the date and time at which the video will be deleted.

Omit the field to indicate no change, or include with a `null` value to remove an existing scheduled deletion. If specified, must be at least 30 days from upload time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/stream#scheduled_deletion Stream#scheduled_deletion}

---

##### `ThumbnailTimestampPct`<sup>Optional</sup> <a name="ThumbnailTimestampPct" id="@cdktn/provider-cloudflare.stream.StreamConfig.property.thumbnailTimestampPct"></a>

```csharp
public double ThumbnailTimestampPct { get; set; }
```

- *Type:* double

The timestamp for a thumbnail image calculated as a percentage value of the video's duration.

To convert from a second-wise timestamp to a percentage, divide the desired timestamp by the total duration of the video.  If this value is not set, the default thumbnail image is taken from 0s of the video.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/stream#thumbnail_timestamp_pct Stream#thumbnail_timestamp_pct}

---

##### `Uid`<sup>Optional</sup> <a name="Uid" id="@cdktn/provider-cloudflare.stream.StreamConfig.property.uid"></a>

```csharp
public string Uid { get; set; }
```

- *Type:* string

The unique identifier for the video. Can be used to verify the video being updated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/stream#uid Stream#uid}

---

##### `UploadExpiry`<sup>Optional</sup> <a name="UploadExpiry" id="@cdktn/provider-cloudflare.stream.StreamConfig.property.uploadExpiry"></a>

```csharp
public string UploadExpiry { get; set; }
```

- *Type:* string

The date and time when the video upload URL is no longer valid for direct user uploads.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/stream#upload_expiry Stream#upload_expiry}

---

### StreamInput <a name="StreamInput" id="@cdktn/provider-cloudflare.stream.StreamInput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.stream.StreamInput.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new StreamInput {

};
```


### StreamPlayback <a name="StreamPlayback" id="@cdktn/provider-cloudflare.stream.StreamPlayback"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.stream.StreamPlayback.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new StreamPlayback {

};
```


### StreamPublicDetails <a name="StreamPublicDetails" id="@cdktn/provider-cloudflare.stream.StreamPublicDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.stream.StreamPublicDetails.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new StreamPublicDetails {
    string ChannelLink = null,
    string Logo = null,
    string ShareLink = null,
    string Title = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.stream.StreamPublicDetails.property.channelLink">ChannelLink</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/stream#channel_link Stream#channel_link}. |
| <code><a href="#@cdktn/provider-cloudflare.stream.StreamPublicDetails.property.logo">Logo</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/stream#logo Stream#logo}. |
| <code><a href="#@cdktn/provider-cloudflare.stream.StreamPublicDetails.property.shareLink">ShareLink</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/stream#share_link Stream#share_link}. |
| <code><a href="#@cdktn/provider-cloudflare.stream.StreamPublicDetails.property.title">Title</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/stream#title Stream#title}. |

---

##### `ChannelLink`<sup>Optional</sup> <a name="ChannelLink" id="@cdktn/provider-cloudflare.stream.StreamPublicDetails.property.channelLink"></a>

```csharp
public string ChannelLink { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/stream#channel_link Stream#channel_link}.

---

##### `Logo`<sup>Optional</sup> <a name="Logo" id="@cdktn/provider-cloudflare.stream.StreamPublicDetails.property.logo"></a>

```csharp
public string Logo { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/stream#logo Stream#logo}.

---

##### `ShareLink`<sup>Optional</sup> <a name="ShareLink" id="@cdktn/provider-cloudflare.stream.StreamPublicDetails.property.shareLink"></a>

```csharp
public string ShareLink { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/stream#share_link Stream#share_link}.

---

##### `Title`<sup>Optional</sup> <a name="Title" id="@cdktn/provider-cloudflare.stream.StreamPublicDetails.property.title"></a>

```csharp
public string Title { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/stream#title Stream#title}.

---

### StreamStatus <a name="StreamStatus" id="@cdktn/provider-cloudflare.stream.StreamStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.stream.StreamStatus.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new StreamStatus {

};
```


### StreamWatermark <a name="StreamWatermark" id="@cdktn/provider-cloudflare.stream.StreamWatermark"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.stream.StreamWatermark.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new StreamWatermark {

};
```


## Classes <a name="Classes" id="Classes"></a>

### StreamInputOutputReference <a name="StreamInputOutputReference" id="@cdktn/provider-cloudflare.stream.StreamInputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.stream.StreamInputOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new StreamInputOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.stream.StreamInputOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.stream.StreamInputOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.stream.StreamInputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.stream.StreamInputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.stream.StreamInputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.stream.StreamInputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.stream.StreamInputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.stream.StreamInputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.stream.StreamInputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.stream.StreamInputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.stream.StreamInputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.stream.StreamInputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.stream.StreamInputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.stream.StreamInputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.stream.StreamInputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.stream.StreamInputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.stream.StreamInputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.stream.StreamInputOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.stream.StreamInputOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.stream.StreamInputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.stream.StreamInputOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.stream.StreamInputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.stream.StreamInputOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.stream.StreamInputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.stream.StreamInputOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.stream.StreamInputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.stream.StreamInputOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.stream.StreamInputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.stream.StreamInputOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.stream.StreamInputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.stream.StreamInputOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.stream.StreamInputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.stream.StreamInputOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.stream.StreamInputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.stream.StreamInputOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.stream.StreamInputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.stream.StreamInputOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-cloudflare.stream.StreamInputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.stream.StreamInputOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.stream.StreamInputOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.stream.StreamInputOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.stream.StreamInputOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.stream.StreamInputOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.stream.StreamInputOutputReference.property.height">Height</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.stream.StreamInputOutputReference.property.width">Width</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.stream.StreamInputOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.stream.StreamInput">StreamInput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.stream.StreamInputOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.stream.StreamInputOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Height`<sup>Required</sup> <a name="Height" id="@cdktn/provider-cloudflare.stream.StreamInputOutputReference.property.height"></a>

```csharp
public double Height { get; }
```

- *Type:* double

---

##### `Width`<sup>Required</sup> <a name="Width" id="@cdktn/provider-cloudflare.stream.StreamInputOutputReference.property.width"></a>

```csharp
public double Width { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.stream.StreamInputOutputReference.property.internalValue"></a>

```csharp
public StreamInput InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.stream.StreamInput">StreamInput</a>

---


### StreamPlaybackOutputReference <a name="StreamPlaybackOutputReference" id="@cdktn/provider-cloudflare.stream.StreamPlaybackOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.stream.StreamPlaybackOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new StreamPlaybackOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.stream.StreamPlaybackOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.stream.StreamPlaybackOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.stream.StreamPlaybackOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.stream.StreamPlaybackOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.stream.StreamPlaybackOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.stream.StreamPlaybackOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.stream.StreamPlaybackOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.stream.StreamPlaybackOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.stream.StreamPlaybackOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.stream.StreamPlaybackOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.stream.StreamPlaybackOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.stream.StreamPlaybackOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.stream.StreamPlaybackOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.stream.StreamPlaybackOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.stream.StreamPlaybackOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.stream.StreamPlaybackOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.stream.StreamPlaybackOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.stream.StreamPlaybackOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.stream.StreamPlaybackOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.stream.StreamPlaybackOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.stream.StreamPlaybackOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.stream.StreamPlaybackOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.stream.StreamPlaybackOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.stream.StreamPlaybackOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.stream.StreamPlaybackOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.stream.StreamPlaybackOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.stream.StreamPlaybackOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.stream.StreamPlaybackOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.stream.StreamPlaybackOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.stream.StreamPlaybackOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.stream.StreamPlaybackOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.stream.StreamPlaybackOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.stream.StreamPlaybackOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.stream.StreamPlaybackOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.stream.StreamPlaybackOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.stream.StreamPlaybackOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.stream.StreamPlaybackOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-cloudflare.stream.StreamPlaybackOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.stream.StreamPlaybackOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.stream.StreamPlaybackOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.stream.StreamPlaybackOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.stream.StreamPlaybackOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.stream.StreamPlaybackOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.stream.StreamPlaybackOutputReference.property.dash">Dash</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.stream.StreamPlaybackOutputReference.property.hls">Hls</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.stream.StreamPlaybackOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.stream.StreamPlayback">StreamPlayback</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.stream.StreamPlaybackOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.stream.StreamPlaybackOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Dash`<sup>Required</sup> <a name="Dash" id="@cdktn/provider-cloudflare.stream.StreamPlaybackOutputReference.property.dash"></a>

```csharp
public string Dash { get; }
```

- *Type:* string

---

##### `Hls`<sup>Required</sup> <a name="Hls" id="@cdktn/provider-cloudflare.stream.StreamPlaybackOutputReference.property.hls"></a>

```csharp
public string Hls { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.stream.StreamPlaybackOutputReference.property.internalValue"></a>

```csharp
public StreamPlayback InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.stream.StreamPlayback">StreamPlayback</a>

---


### StreamPublicDetailsOutputReference <a name="StreamPublicDetailsOutputReference" id="@cdktn/provider-cloudflare.stream.StreamPublicDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.stream.StreamPublicDetailsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new StreamPublicDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.stream.StreamPublicDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.stream.StreamPublicDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.stream.StreamPublicDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.stream.StreamPublicDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.stream.StreamPublicDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.stream.StreamPublicDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.stream.StreamPublicDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.stream.StreamPublicDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.stream.StreamPublicDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.stream.StreamPublicDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.stream.StreamPublicDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.stream.StreamPublicDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.stream.StreamPublicDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.stream.StreamPublicDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.stream.StreamPublicDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.stream.StreamPublicDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.stream.StreamPublicDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.stream.StreamPublicDetailsOutputReference.resetChannelLink">ResetChannelLink</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.stream.StreamPublicDetailsOutputReference.resetLogo">ResetLogo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.stream.StreamPublicDetailsOutputReference.resetShareLink">ResetShareLink</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.stream.StreamPublicDetailsOutputReference.resetTitle">ResetTitle</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.stream.StreamPublicDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.stream.StreamPublicDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.stream.StreamPublicDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.stream.StreamPublicDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.stream.StreamPublicDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.stream.StreamPublicDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.stream.StreamPublicDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.stream.StreamPublicDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.stream.StreamPublicDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.stream.StreamPublicDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.stream.StreamPublicDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.stream.StreamPublicDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.stream.StreamPublicDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.stream.StreamPublicDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.stream.StreamPublicDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.stream.StreamPublicDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.stream.StreamPublicDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.stream.StreamPublicDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.stream.StreamPublicDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.stream.StreamPublicDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-cloudflare.stream.StreamPublicDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.stream.StreamPublicDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.stream.StreamPublicDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.stream.StreamPublicDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetChannelLink` <a name="ResetChannelLink" id="@cdktn/provider-cloudflare.stream.StreamPublicDetailsOutputReference.resetChannelLink"></a>

```csharp
private void ResetChannelLink()
```

##### `ResetLogo` <a name="ResetLogo" id="@cdktn/provider-cloudflare.stream.StreamPublicDetailsOutputReference.resetLogo"></a>

```csharp
private void ResetLogo()
```

##### `ResetShareLink` <a name="ResetShareLink" id="@cdktn/provider-cloudflare.stream.StreamPublicDetailsOutputReference.resetShareLink"></a>

```csharp
private void ResetShareLink()
```

##### `ResetTitle` <a name="ResetTitle" id="@cdktn/provider-cloudflare.stream.StreamPublicDetailsOutputReference.resetTitle"></a>

```csharp
private void ResetTitle()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.stream.StreamPublicDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.stream.StreamPublicDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.stream.StreamPublicDetailsOutputReference.property.channelLinkInput">ChannelLinkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.stream.StreamPublicDetailsOutputReference.property.logoInput">LogoInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.stream.StreamPublicDetailsOutputReference.property.shareLinkInput">ShareLinkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.stream.StreamPublicDetailsOutputReference.property.titleInput">TitleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.stream.StreamPublicDetailsOutputReference.property.channelLink">ChannelLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.stream.StreamPublicDetailsOutputReference.property.logo">Logo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.stream.StreamPublicDetailsOutputReference.property.shareLink">ShareLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.stream.StreamPublicDetailsOutputReference.property.title">Title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.stream.StreamPublicDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.stream.StreamPublicDetails">StreamPublicDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.stream.StreamPublicDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.stream.StreamPublicDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ChannelLinkInput`<sup>Optional</sup> <a name="ChannelLinkInput" id="@cdktn/provider-cloudflare.stream.StreamPublicDetailsOutputReference.property.channelLinkInput"></a>

```csharp
public string ChannelLinkInput { get; }
```

- *Type:* string

---

##### `LogoInput`<sup>Optional</sup> <a name="LogoInput" id="@cdktn/provider-cloudflare.stream.StreamPublicDetailsOutputReference.property.logoInput"></a>

```csharp
public string LogoInput { get; }
```

- *Type:* string

---

##### `ShareLinkInput`<sup>Optional</sup> <a name="ShareLinkInput" id="@cdktn/provider-cloudflare.stream.StreamPublicDetailsOutputReference.property.shareLinkInput"></a>

```csharp
public string ShareLinkInput { get; }
```

- *Type:* string

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktn/provider-cloudflare.stream.StreamPublicDetailsOutputReference.property.titleInput"></a>

```csharp
public string TitleInput { get; }
```

- *Type:* string

---

##### `ChannelLink`<sup>Required</sup> <a name="ChannelLink" id="@cdktn/provider-cloudflare.stream.StreamPublicDetailsOutputReference.property.channelLink"></a>

```csharp
public string ChannelLink { get; }
```

- *Type:* string

---

##### `Logo`<sup>Required</sup> <a name="Logo" id="@cdktn/provider-cloudflare.stream.StreamPublicDetailsOutputReference.property.logo"></a>

```csharp
public string Logo { get; }
```

- *Type:* string

---

##### `ShareLink`<sup>Required</sup> <a name="ShareLink" id="@cdktn/provider-cloudflare.stream.StreamPublicDetailsOutputReference.property.shareLink"></a>

```csharp
public string ShareLink { get; }
```

- *Type:* string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktn/provider-cloudflare.stream.StreamPublicDetailsOutputReference.property.title"></a>

```csharp
public string Title { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.stream.StreamPublicDetailsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|StreamPublicDetails InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.stream.StreamPublicDetails">StreamPublicDetails</a>

---


### StreamStatusOutputReference <a name="StreamStatusOutputReference" id="@cdktn/provider-cloudflare.stream.StreamStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.stream.StreamStatusOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new StreamStatusOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.stream.StreamStatusOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.stream.StreamStatusOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.stream.StreamStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.stream.StreamStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.stream.StreamStatusOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.stream.StreamStatusOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.stream.StreamStatusOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.stream.StreamStatusOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.stream.StreamStatusOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.stream.StreamStatusOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.stream.StreamStatusOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.stream.StreamStatusOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.stream.StreamStatusOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.stream.StreamStatusOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.stream.StreamStatusOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.stream.StreamStatusOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.stream.StreamStatusOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.stream.StreamStatusOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.stream.StreamStatusOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.stream.StreamStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.stream.StreamStatusOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.stream.StreamStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.stream.StreamStatusOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.stream.StreamStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.stream.StreamStatusOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.stream.StreamStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.stream.StreamStatusOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.stream.StreamStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.stream.StreamStatusOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.stream.StreamStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.stream.StreamStatusOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.stream.StreamStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.stream.StreamStatusOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.stream.StreamStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.stream.StreamStatusOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.stream.StreamStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.stream.StreamStatusOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-cloudflare.stream.StreamStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.stream.StreamStatusOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.stream.StreamStatusOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.stream.StreamStatusOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.stream.StreamStatusOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.stream.StreamStatusOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.stream.StreamStatusOutputReference.property.errorReasonCode">ErrorReasonCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.stream.StreamStatusOutputReference.property.errorReasonText">ErrorReasonText</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.stream.StreamStatusOutputReference.property.pctComplete">PctComplete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.stream.StreamStatusOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.stream.StreamStatusOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.stream.StreamStatus">StreamStatus</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.stream.StreamStatusOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.stream.StreamStatusOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ErrorReasonCode`<sup>Required</sup> <a name="ErrorReasonCode" id="@cdktn/provider-cloudflare.stream.StreamStatusOutputReference.property.errorReasonCode"></a>

```csharp
public string ErrorReasonCode { get; }
```

- *Type:* string

---

##### `ErrorReasonText`<sup>Required</sup> <a name="ErrorReasonText" id="@cdktn/provider-cloudflare.stream.StreamStatusOutputReference.property.errorReasonText"></a>

```csharp
public string ErrorReasonText { get; }
```

- *Type:* string

---

##### `PctComplete`<sup>Required</sup> <a name="PctComplete" id="@cdktn/provider-cloudflare.stream.StreamStatusOutputReference.property.pctComplete"></a>

```csharp
public string PctComplete { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-cloudflare.stream.StreamStatusOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.stream.StreamStatusOutputReference.property.internalValue"></a>

```csharp
public StreamStatus InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.stream.StreamStatus">StreamStatus</a>

---


### StreamWatermarkOutputReference <a name="StreamWatermarkOutputReference" id="@cdktn/provider-cloudflare.stream.StreamWatermarkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.stream.StreamWatermarkOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new StreamWatermarkOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.stream.StreamWatermarkOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.stream.StreamWatermarkOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.stream.StreamWatermarkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.stream.StreamWatermarkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.stream.StreamWatermarkOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.stream.StreamWatermarkOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.stream.StreamWatermarkOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.stream.StreamWatermarkOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.stream.StreamWatermarkOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.stream.StreamWatermarkOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.stream.StreamWatermarkOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.stream.StreamWatermarkOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.stream.StreamWatermarkOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.stream.StreamWatermarkOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.stream.StreamWatermarkOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.stream.StreamWatermarkOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.stream.StreamWatermarkOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.stream.StreamWatermarkOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.stream.StreamWatermarkOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.stream.StreamWatermarkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.stream.StreamWatermarkOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.stream.StreamWatermarkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.stream.StreamWatermarkOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.stream.StreamWatermarkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.stream.StreamWatermarkOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.stream.StreamWatermarkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.stream.StreamWatermarkOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.stream.StreamWatermarkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.stream.StreamWatermarkOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.stream.StreamWatermarkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.stream.StreamWatermarkOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.stream.StreamWatermarkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.stream.StreamWatermarkOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.stream.StreamWatermarkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.stream.StreamWatermarkOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.stream.StreamWatermarkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.stream.StreamWatermarkOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-cloudflare.stream.StreamWatermarkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.stream.StreamWatermarkOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.stream.StreamWatermarkOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.stream.StreamWatermarkOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.stream.StreamWatermarkOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.stream.StreamWatermarkOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.stream.StreamWatermarkOutputReference.property.created">Created</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.stream.StreamWatermarkOutputReference.property.downloadedFrom">DownloadedFrom</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.stream.StreamWatermarkOutputReference.property.height">Height</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.stream.StreamWatermarkOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.stream.StreamWatermarkOutputReference.property.opacity">Opacity</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.stream.StreamWatermarkOutputReference.property.padding">Padding</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.stream.StreamWatermarkOutputReference.property.position">Position</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.stream.StreamWatermarkOutputReference.property.scale">Scale</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.stream.StreamWatermarkOutputReference.property.size">Size</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.stream.StreamWatermarkOutputReference.property.uid">Uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.stream.StreamWatermarkOutputReference.property.width">Width</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.stream.StreamWatermarkOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.stream.StreamWatermark">StreamWatermark</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.stream.StreamWatermarkOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.stream.StreamWatermarkOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Created`<sup>Required</sup> <a name="Created" id="@cdktn/provider-cloudflare.stream.StreamWatermarkOutputReference.property.created"></a>

```csharp
public string Created { get; }
```

- *Type:* string

---

##### `DownloadedFrom`<sup>Required</sup> <a name="DownloadedFrom" id="@cdktn/provider-cloudflare.stream.StreamWatermarkOutputReference.property.downloadedFrom"></a>

```csharp
public string DownloadedFrom { get; }
```

- *Type:* string

---

##### `Height`<sup>Required</sup> <a name="Height" id="@cdktn/provider-cloudflare.stream.StreamWatermarkOutputReference.property.height"></a>

```csharp
public double Height { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-cloudflare.stream.StreamWatermarkOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Opacity`<sup>Required</sup> <a name="Opacity" id="@cdktn/provider-cloudflare.stream.StreamWatermarkOutputReference.property.opacity"></a>

```csharp
public double Opacity { get; }
```

- *Type:* double

---

##### `Padding`<sup>Required</sup> <a name="Padding" id="@cdktn/provider-cloudflare.stream.StreamWatermarkOutputReference.property.padding"></a>

```csharp
public double Padding { get; }
```

- *Type:* double

---

##### `Position`<sup>Required</sup> <a name="Position" id="@cdktn/provider-cloudflare.stream.StreamWatermarkOutputReference.property.position"></a>

```csharp
public string Position { get; }
```

- *Type:* string

---

##### `Scale`<sup>Required</sup> <a name="Scale" id="@cdktn/provider-cloudflare.stream.StreamWatermarkOutputReference.property.scale"></a>

```csharp
public double Scale { get; }
```

- *Type:* double

---

##### `Size`<sup>Required</sup> <a name="Size" id="@cdktn/provider-cloudflare.stream.StreamWatermarkOutputReference.property.size"></a>

```csharp
public double Size { get; }
```

- *Type:* double

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktn/provider-cloudflare.stream.StreamWatermarkOutputReference.property.uid"></a>

```csharp
public string Uid { get; }
```

- *Type:* string

---

##### `Width`<sup>Required</sup> <a name="Width" id="@cdktn/provider-cloudflare.stream.StreamWatermarkOutputReference.property.width"></a>

```csharp
public double Width { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.stream.StreamWatermarkOutputReference.property.internalValue"></a>

```csharp
public StreamWatermark InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.stream.StreamWatermark">StreamWatermark</a>

---



