# `dataCloudflarePageShieldCookies` Submodule <a name="`dataCloudflarePageShieldCookies` Submodule" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookies"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflarePageShieldCookies <a name="DataCloudflarePageShieldCookies" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookies"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/page_shield_cookies cloudflare_page_shield_cookies}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookies.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflarePageShieldCookies(Construct Scope, string Id, DataCloudflarePageShieldCookiesConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookies.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookies.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookies.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookiesConfig">DataCloudflarePageShieldCookiesConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookies.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookies.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookies.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookiesConfig">DataCloudflarePageShieldCookiesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookies.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookies.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookies.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookies.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookies.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookies.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookies.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookies.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookies.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookies.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookies.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookies.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookies.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookies.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookies.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookies.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookies.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookies.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookies.resetZoneId">ResetZoneId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookies.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookies.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookies.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookies.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookies.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookies.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookies.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookies.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookies.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookies.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookies.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookies.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookies.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookies.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookies.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookies.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookies.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookies.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookies.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookies.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookies.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookies.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookies.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookies.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookies.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookies.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookies.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookies.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookies.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookies.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookies.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookies.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetZoneId` <a name="ResetZoneId" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookies.resetZoneId"></a>

```csharp
private void ResetZoneId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookies.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookies.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookies.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookies.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataCloudflarePageShieldCookies resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookies.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

DataCloudflarePageShieldCookies.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookies.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookies.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

DataCloudflarePageShieldCookies.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookies.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookies.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

DataCloudflarePageShieldCookies.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookies.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookies.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

DataCloudflarePageShieldCookies.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataCloudflarePageShieldCookies resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookies.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookies.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataCloudflarePageShieldCookies to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookies.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataCloudflarePageShieldCookies that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/page_shield_cookies#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookies.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataCloudflarePageShieldCookies to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookies.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookies.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookies.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookies.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookies.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookies.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookies.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookies.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookies.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookies.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookies.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookies.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookies.property.domainAttribute">DomainAttribute</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookies.property.expiresAttribute">ExpiresAttribute</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookies.property.firstSeenAt">FirstSeenAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookies.property.host">Host</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookies.property.httpOnlyAttribute">HttpOnlyAttribute</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookies.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookies.property.lastSeenAt">LastSeenAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookies.property.maxAgeAttribute">MaxAgeAttribute</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookies.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookies.property.pageUrls">PageUrls</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookies.property.pathAttribute">PathAttribute</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookies.property.sameSiteAttribute">SameSiteAttribute</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookies.property.secureAttribute">SecureAttribute</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookies.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookies.property.cookieIdInput">CookieIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookies.property.zoneIdInput">ZoneIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookies.property.cookieId">CookieId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookies.property.zoneId">ZoneId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookies.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookies.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookies.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookies.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookies.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookies.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookies.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookies.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookies.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookies.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookies.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookies.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `DomainAttribute`<sup>Required</sup> <a name="DomainAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookies.property.domainAttribute"></a>

```csharp
public string DomainAttribute { get; }
```

- *Type:* string

---

##### `ExpiresAttribute`<sup>Required</sup> <a name="ExpiresAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookies.property.expiresAttribute"></a>

```csharp
public string ExpiresAttribute { get; }
```

- *Type:* string

---

##### `FirstSeenAt`<sup>Required</sup> <a name="FirstSeenAt" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookies.property.firstSeenAt"></a>

```csharp
public string FirstSeenAt { get; }
```

- *Type:* string

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookies.property.host"></a>

```csharp
public string Host { get; }
```

- *Type:* string

---

##### `HttpOnlyAttribute`<sup>Required</sup> <a name="HttpOnlyAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookies.property.httpOnlyAttribute"></a>

```csharp
public IResolvable HttpOnlyAttribute { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookies.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LastSeenAt`<sup>Required</sup> <a name="LastSeenAt" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookies.property.lastSeenAt"></a>

```csharp
public string LastSeenAt { get; }
```

- *Type:* string

---

##### `MaxAgeAttribute`<sup>Required</sup> <a name="MaxAgeAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookies.property.maxAgeAttribute"></a>

```csharp
public double MaxAgeAttribute { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookies.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PageUrls`<sup>Required</sup> <a name="PageUrls" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookies.property.pageUrls"></a>

```csharp
public string[] PageUrls { get; }
```

- *Type:* string[]

---

##### `PathAttribute`<sup>Required</sup> <a name="PathAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookies.property.pathAttribute"></a>

```csharp
public string PathAttribute { get; }
```

- *Type:* string

---

##### `SameSiteAttribute`<sup>Required</sup> <a name="SameSiteAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookies.property.sameSiteAttribute"></a>

```csharp
public string SameSiteAttribute { get; }
```

- *Type:* string

---

##### `SecureAttribute`<sup>Required</sup> <a name="SecureAttribute" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookies.property.secureAttribute"></a>

```csharp
public IResolvable SecureAttribute { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookies.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `CookieIdInput`<sup>Optional</sup> <a name="CookieIdInput" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookies.property.cookieIdInput"></a>

```csharp
public string CookieIdInput { get; }
```

- *Type:* string

---

##### `ZoneIdInput`<sup>Optional</sup> <a name="ZoneIdInput" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookies.property.zoneIdInput"></a>

```csharp
public string ZoneIdInput { get; }
```

- *Type:* string

---

##### `CookieId`<sup>Required</sup> <a name="CookieId" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookies.property.cookieId"></a>

```csharp
public string CookieId { get; }
```

- *Type:* string

---

##### `ZoneId`<sup>Required</sup> <a name="ZoneId" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookies.property.zoneId"></a>

```csharp
public string ZoneId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookies.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookies.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflarePageShieldCookiesConfig <a name="DataCloudflarePageShieldCookiesConfig" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookiesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookiesConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflarePageShieldCookiesConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string CookieId,
    string ZoneId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookiesConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookiesConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookiesConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookiesConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookiesConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookiesConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookiesConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookiesConfig.property.cookieId">CookieId</a></code> | <code>string</code> | Identifier. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookiesConfig.property.zoneId">ZoneId</a></code> | <code>string</code> | Identifier. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookiesConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookiesConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookiesConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookiesConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookiesConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookiesConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookiesConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CookieId`<sup>Required</sup> <a name="CookieId" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookiesConfig.property.cookieId"></a>

```csharp
public string CookieId { get; set; }
```

- *Type:* string

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/page_shield_cookies#cookie_id DataCloudflarePageShieldCookies#cookie_id}

---

##### `ZoneId`<sup>Optional</sup> <a name="ZoneId" id="@cdktn/provider-cloudflare.dataCloudflarePageShieldCookies.DataCloudflarePageShieldCookiesConfig.property.zoneId"></a>

```csharp
public string ZoneId { get; set; }
```

- *Type:* string

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/page_shield_cookies#zone_id DataCloudflarePageShieldCookies#zone_id}

---



