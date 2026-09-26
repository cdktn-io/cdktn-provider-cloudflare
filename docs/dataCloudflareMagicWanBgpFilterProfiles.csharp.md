# `dataCloudflareMagicWanBgpFilterProfiles` Submodule <a name="`dataCloudflareMagicWanBgpFilterProfiles` Submodule" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareMagicWanBgpFilterProfiles <a name="DataCloudflareMagicWanBgpFilterProfiles" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.26.0/docs/data-sources/magic_wan_bgp_filter_profiles cloudflare_magic_wan_bgp_filter_profiles}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareMagicWanBgpFilterProfiles(Construct Scope, string Id, DataCloudflareMagicWanBgpFilterProfilesConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesConfig">DataCloudflareMagicWanBgpFilterProfilesConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesConfig">DataCloudflareMagicWanBgpFilterProfilesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.resetMaxItems">ResetMaxItems</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetMaxItems` <a name="ResetMaxItems" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.resetMaxItems"></a>

```csharp
private void ResetMaxItems()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataCloudflareMagicWanBgpFilterProfiles resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

DataCloudflareMagicWanBgpFilterProfiles.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

DataCloudflareMagicWanBgpFilterProfiles.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

DataCloudflareMagicWanBgpFilterProfiles.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

DataCloudflareMagicWanBgpFilterProfiles.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataCloudflareMagicWanBgpFilterProfiles resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataCloudflareMagicWanBgpFilterProfiles to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataCloudflareMagicWanBgpFilterProfiles that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.26.0/docs/data-sources/magic_wan_bgp_filter_profiles#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataCloudflareMagicWanBgpFilterProfiles to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.property.result">Result</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultList">DataCloudflareMagicWanBgpFilterProfilesResultList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.property.accountIdInput">AccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.property.maxItemsInput">MaxItemsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.property.accountId">AccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.property.maxItems">MaxItems</a></code> | <code>double</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Result`<sup>Required</sup> <a name="Result" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.property.result"></a>

```csharp
public DataCloudflareMagicWanBgpFilterProfilesResultList Result { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultList">DataCloudflareMagicWanBgpFilterProfilesResultList</a>

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.property.accountIdInput"></a>

```csharp
public string AccountIdInput { get; }
```

- *Type:* string

---

##### `MaxItemsInput`<sup>Optional</sup> <a name="MaxItemsInput" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.property.maxItemsInput"></a>

```csharp
public double MaxItemsInput { get; }
```

- *Type:* double

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.property.accountId"></a>

```csharp
public string AccountId { get; }
```

- *Type:* string

---

##### `MaxItems`<sup>Required</sup> <a name="MaxItems" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.property.maxItems"></a>

```csharp
public double MaxItems { get; }
```

- *Type:* double

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfiles.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareMagicWanBgpFilterProfilesConfig <a name="DataCloudflareMagicWanBgpFilterProfilesConfig" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareMagicWanBgpFilterProfilesConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string AccountId,
    double MaxItems = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesConfig.property.accountId">AccountId</a></code> | <code>string</code> | Identifier. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesConfig.property.maxItems">MaxItems</a></code> | <code>double</code> | Max items to fetch, default: 1000. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesConfig.property.accountId"></a>

```csharp
public string AccountId { get; set; }
```

- *Type:* string

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.26.0/docs/data-sources/magic_wan_bgp_filter_profiles#account_id DataCloudflareMagicWanBgpFilterProfiles#account_id}

---

##### `MaxItems`<sup>Optional</sup> <a name="MaxItems" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesConfig.property.maxItems"></a>

```csharp
public double MaxItems { get; set; }
```

- *Type:* double

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.26.0/docs/data-sources/magic_wan_bgp_filter_profiles#max_items DataCloudflareMagicWanBgpFilterProfiles#max_items}

---

### DataCloudflareMagicWanBgpFilterProfilesResult <a name="DataCloudflareMagicWanBgpFilterProfilesResult" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResult"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResult.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareMagicWanBgpFilterProfilesResult {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareMagicWanBgpFilterProfilesResultList <a name="DataCloudflareMagicWanBgpFilterProfilesResultList" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareMagicWanBgpFilterProfilesResultList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultList.get"></a>

```csharp
private DataCloudflareMagicWanBgpFilterProfilesResultOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataCloudflareMagicWanBgpFilterProfilesResultOutputReference <a name="DataCloudflareMagicWanBgpFilterProfilesResultOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareMagicWanBgpFilterProfilesResultOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultOutputReference.property.createdOn">CreatedOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultOutputReference.property.matchAction">MatchAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultOutputReference.property.modifiedOn">ModifiedOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultOutputReference.property.targets">Targets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResult">DataCloudflareMagicWanBgpFilterProfilesResult</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreatedOn`<sup>Required</sup> <a name="CreatedOn" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultOutputReference.property.createdOn"></a>

```csharp
public string CreatedOn { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `MatchAction`<sup>Required</sup> <a name="MatchAction" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultOutputReference.property.matchAction"></a>

```csharp
public string MatchAction { get; }
```

- *Type:* string

---

##### `ModifiedOn`<sup>Required</sup> <a name="ModifiedOn" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultOutputReference.property.modifiedOn"></a>

```csharp
public string ModifiedOn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Targets`<sup>Required</sup> <a name="Targets" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultOutputReference.property.targets"></a>

```csharp
public string[] Targets { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResultOutputReference.property.internalValue"></a>

```csharp
public DataCloudflareMagicWanBgpFilterProfilesResult InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareMagicWanBgpFilterProfiles.DataCloudflareMagicWanBgpFilterProfilesResult">DataCloudflareMagicWanBgpFilterProfilesResult</a>

---



