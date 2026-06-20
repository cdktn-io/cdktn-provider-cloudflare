# `dataCloudflareBotManagement` Submodule <a name="`dataCloudflareBotManagement` Submodule" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareBotManagement <a name="DataCloudflareBotManagement" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/bot_management cloudflare_bot_management}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareBotManagement(Construct Scope, string Id, DataCloudflareBotManagementConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagementConfig">DataCloudflareBotManagementConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagementConfig">DataCloudflareBotManagementConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.resetZoneId">ResetZoneId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetZoneId` <a name="ResetZoneId" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.resetZoneId"></a>

```csharp
private void ResetZoneId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataCloudflareBotManagement resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

DataCloudflareBotManagement.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

DataCloudflareBotManagement.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

DataCloudflareBotManagement.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

DataCloudflareBotManagement.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataCloudflareBotManagement resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataCloudflareBotManagement to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataCloudflareBotManagement that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/bot_management#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataCloudflareBotManagement to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.property.aiBotsProtection">AiBotsProtection</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.property.autoUpdateModel">AutoUpdateModel</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.property.bmCookieEnabled">BmCookieEnabled</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.property.cfRobotsVariant">CfRobotsVariant</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.property.contentBotsProtection">ContentBotsProtection</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.property.crawlerProtection">CrawlerProtection</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.property.enableJs">EnableJs</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.property.fightMode">FightMode</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.property.isRobotsTxtManaged">IsRobotsTxtManaged</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.property.optimizeWordpress">OptimizeWordpress</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.property.sbfmDefinitelyAutomated">SbfmDefinitelyAutomated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.property.sbfmLikelyAutomated">SbfmLikelyAutomated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.property.sbfmStaticResourceProtection">SbfmStaticResourceProtection</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.property.sbfmVerifiedBots">SbfmVerifiedBots</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.property.staleZoneConfiguration">StaleZoneConfiguration</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagementStaleZoneConfigurationOutputReference">DataCloudflareBotManagementStaleZoneConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.property.suppressSessionScore">SuppressSessionScore</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.property.usingLatestModel">UsingLatestModel</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.property.zoneIdInput">ZoneIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.property.zoneId">ZoneId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `AiBotsProtection`<sup>Required</sup> <a name="AiBotsProtection" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.property.aiBotsProtection"></a>

```csharp
public string AiBotsProtection { get; }
```

- *Type:* string

---

##### `AutoUpdateModel`<sup>Required</sup> <a name="AutoUpdateModel" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.property.autoUpdateModel"></a>

```csharp
public IResolvable AutoUpdateModel { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `BmCookieEnabled`<sup>Required</sup> <a name="BmCookieEnabled" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.property.bmCookieEnabled"></a>

```csharp
public IResolvable BmCookieEnabled { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `CfRobotsVariant`<sup>Required</sup> <a name="CfRobotsVariant" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.property.cfRobotsVariant"></a>

```csharp
public string CfRobotsVariant { get; }
```

- *Type:* string

---

##### `ContentBotsProtection`<sup>Required</sup> <a name="ContentBotsProtection" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.property.contentBotsProtection"></a>

```csharp
public string ContentBotsProtection { get; }
```

- *Type:* string

---

##### `CrawlerProtection`<sup>Required</sup> <a name="CrawlerProtection" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.property.crawlerProtection"></a>

```csharp
public string CrawlerProtection { get; }
```

- *Type:* string

---

##### `EnableJs`<sup>Required</sup> <a name="EnableJs" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.property.enableJs"></a>

```csharp
public IResolvable EnableJs { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `FightMode`<sup>Required</sup> <a name="FightMode" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.property.fightMode"></a>

```csharp
public IResolvable FightMode { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IsRobotsTxtManaged`<sup>Required</sup> <a name="IsRobotsTxtManaged" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.property.isRobotsTxtManaged"></a>

```csharp
public IResolvable IsRobotsTxtManaged { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `OptimizeWordpress`<sup>Required</sup> <a name="OptimizeWordpress" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.property.optimizeWordpress"></a>

```csharp
public IResolvable OptimizeWordpress { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `SbfmDefinitelyAutomated`<sup>Required</sup> <a name="SbfmDefinitelyAutomated" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.property.sbfmDefinitelyAutomated"></a>

```csharp
public string SbfmDefinitelyAutomated { get; }
```

- *Type:* string

---

##### `SbfmLikelyAutomated`<sup>Required</sup> <a name="SbfmLikelyAutomated" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.property.sbfmLikelyAutomated"></a>

```csharp
public string SbfmLikelyAutomated { get; }
```

- *Type:* string

---

##### `SbfmStaticResourceProtection`<sup>Required</sup> <a name="SbfmStaticResourceProtection" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.property.sbfmStaticResourceProtection"></a>

```csharp
public IResolvable SbfmStaticResourceProtection { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `SbfmVerifiedBots`<sup>Required</sup> <a name="SbfmVerifiedBots" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.property.sbfmVerifiedBots"></a>

```csharp
public string SbfmVerifiedBots { get; }
```

- *Type:* string

---

##### `StaleZoneConfiguration`<sup>Required</sup> <a name="StaleZoneConfiguration" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.property.staleZoneConfiguration"></a>

```csharp
public DataCloudflareBotManagementStaleZoneConfigurationOutputReference StaleZoneConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagementStaleZoneConfigurationOutputReference">DataCloudflareBotManagementStaleZoneConfigurationOutputReference</a>

---

##### `SuppressSessionScore`<sup>Required</sup> <a name="SuppressSessionScore" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.property.suppressSessionScore"></a>

```csharp
public IResolvable SuppressSessionScore { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `UsingLatestModel`<sup>Required</sup> <a name="UsingLatestModel" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.property.usingLatestModel"></a>

```csharp
public IResolvable UsingLatestModel { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `ZoneIdInput`<sup>Optional</sup> <a name="ZoneIdInput" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.property.zoneIdInput"></a>

```csharp
public string ZoneIdInput { get; }
```

- *Type:* string

---

##### `ZoneId`<sup>Required</sup> <a name="ZoneId" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.property.zoneId"></a>

```csharp
public string ZoneId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagement.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareBotManagementConfig <a name="DataCloudflareBotManagementConfig" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagementConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagementConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareBotManagementConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string ZoneId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagementConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagementConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagementConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagementConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagementConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagementConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagementConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagementConfig.property.zoneId">ZoneId</a></code> | <code>string</code> | Identifier. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagementConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagementConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagementConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagementConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagementConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagementConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagementConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ZoneId`<sup>Optional</sup> <a name="ZoneId" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagementConfig.property.zoneId"></a>

```csharp
public string ZoneId { get; set; }
```

- *Type:* string

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/data-sources/bot_management#zone_id DataCloudflareBotManagement#zone_id}

---

### DataCloudflareBotManagementStaleZoneConfiguration <a name="DataCloudflareBotManagementStaleZoneConfiguration" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagementStaleZoneConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagementStaleZoneConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareBotManagementStaleZoneConfiguration {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareBotManagementStaleZoneConfigurationOutputReference <a name="DataCloudflareBotManagementStaleZoneConfigurationOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagementStaleZoneConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagementStaleZoneConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new DataCloudflareBotManagementStaleZoneConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagementStaleZoneConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagementStaleZoneConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagementStaleZoneConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagementStaleZoneConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagementStaleZoneConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagementStaleZoneConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagementStaleZoneConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagementStaleZoneConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagementStaleZoneConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagementStaleZoneConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagementStaleZoneConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagementStaleZoneConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagementStaleZoneConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagementStaleZoneConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagementStaleZoneConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagementStaleZoneConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagementStaleZoneConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagementStaleZoneConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagementStaleZoneConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagementStaleZoneConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagementStaleZoneConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagementStaleZoneConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagementStaleZoneConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagementStaleZoneConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagementStaleZoneConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagementStaleZoneConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagementStaleZoneConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagementStaleZoneConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagementStaleZoneConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagementStaleZoneConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagementStaleZoneConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagementStaleZoneConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagementStaleZoneConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagementStaleZoneConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagementStaleZoneConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagementStaleZoneConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagementStaleZoneConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagementStaleZoneConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagementStaleZoneConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagementStaleZoneConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagementStaleZoneConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagementStaleZoneConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagementStaleZoneConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagementStaleZoneConfigurationOutputReference.property.fightMode">FightMode</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagementStaleZoneConfigurationOutputReference.property.optimizeWordpress">OptimizeWordpress</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagementStaleZoneConfigurationOutputReference.property.sbfmDefinitelyAutomated">SbfmDefinitelyAutomated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagementStaleZoneConfigurationOutputReference.property.sbfmLikelyAutomated">SbfmLikelyAutomated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagementStaleZoneConfigurationOutputReference.property.sbfmStaticResourceProtection">SbfmStaticResourceProtection</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagementStaleZoneConfigurationOutputReference.property.sbfmVerifiedBots">SbfmVerifiedBots</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagementStaleZoneConfigurationOutputReference.property.suppressSessionScore">SuppressSessionScore</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagementStaleZoneConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagementStaleZoneConfiguration">DataCloudflareBotManagementStaleZoneConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagementStaleZoneConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagementStaleZoneConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FightMode`<sup>Required</sup> <a name="FightMode" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagementStaleZoneConfigurationOutputReference.property.fightMode"></a>

```csharp
public IResolvable FightMode { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `OptimizeWordpress`<sup>Required</sup> <a name="OptimizeWordpress" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagementStaleZoneConfigurationOutputReference.property.optimizeWordpress"></a>

```csharp
public IResolvable OptimizeWordpress { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `SbfmDefinitelyAutomated`<sup>Required</sup> <a name="SbfmDefinitelyAutomated" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagementStaleZoneConfigurationOutputReference.property.sbfmDefinitelyAutomated"></a>

```csharp
public string SbfmDefinitelyAutomated { get; }
```

- *Type:* string

---

##### `SbfmLikelyAutomated`<sup>Required</sup> <a name="SbfmLikelyAutomated" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagementStaleZoneConfigurationOutputReference.property.sbfmLikelyAutomated"></a>

```csharp
public string SbfmLikelyAutomated { get; }
```

- *Type:* string

---

##### `SbfmStaticResourceProtection`<sup>Required</sup> <a name="SbfmStaticResourceProtection" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagementStaleZoneConfigurationOutputReference.property.sbfmStaticResourceProtection"></a>

```csharp
public string SbfmStaticResourceProtection { get; }
```

- *Type:* string

---

##### `SbfmVerifiedBots`<sup>Required</sup> <a name="SbfmVerifiedBots" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagementStaleZoneConfigurationOutputReference.property.sbfmVerifiedBots"></a>

```csharp
public string SbfmVerifiedBots { get; }
```

- *Type:* string

---

##### `SuppressSessionScore`<sup>Required</sup> <a name="SuppressSessionScore" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagementStaleZoneConfigurationOutputReference.property.suppressSessionScore"></a>

```csharp
public IResolvable SuppressSessionScore { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagementStaleZoneConfigurationOutputReference.property.internalValue"></a>

```csharp
public DataCloudflareBotManagementStaleZoneConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareBotManagement.DataCloudflareBotManagementStaleZoneConfiguration">DataCloudflareBotManagementStaleZoneConfiguration</a>

---



