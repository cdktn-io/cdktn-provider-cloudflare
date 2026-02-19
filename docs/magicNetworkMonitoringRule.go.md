# `magicNetworkMonitoringRule` Submodule <a name="`magicNetworkMonitoringRule` Submodule" id="@cdktn/provider-cloudflare.magicNetworkMonitoringRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MagicNetworkMonitoringRule <a name="MagicNetworkMonitoringRule" id="@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/magic_network_monitoring_rule cloudflare_magic_network_monitoring_rule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/magicnetworkmonitoringrule"

magicnetworkmonitoringrule.NewMagicNetworkMonitoringRule(scope Construct, id *string, config MagicNetworkMonitoringRuleConfig) MagicNetworkMonitoringRule
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRuleConfig">MagicNetworkMonitoringRuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRuleConfig">MagicNetworkMonitoringRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.resetAutomaticAdvertisement">ResetAutomaticAdvertisement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.resetBandwidth">ResetBandwidth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.resetDuration">ResetDuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.resetPacketThreshold">ResetPacketThreshold</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.resetPrefixes">ResetPrefixes</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetAutomaticAdvertisement` <a name="ResetAutomaticAdvertisement" id="@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.resetAutomaticAdvertisement"></a>

```go
func ResetAutomaticAdvertisement()
```

##### `ResetBandwidth` <a name="ResetBandwidth" id="@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.resetBandwidth"></a>

```go
func ResetBandwidth()
```

##### `ResetDuration` <a name="ResetDuration" id="@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.resetDuration"></a>

```go
func ResetDuration()
```

##### `ResetPacketThreshold` <a name="ResetPacketThreshold" id="@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.resetPacketThreshold"></a>

```go
func ResetPacketThreshold()
```

##### `ResetPrefixes` <a name="ResetPrefixes" id="@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.resetPrefixes"></a>

```go
func ResetPrefixes()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a MagicNetworkMonitoringRule resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/magicnetworkmonitoringrule"

magicnetworkmonitoringrule.MagicNetworkMonitoringRule_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/magicnetworkmonitoringrule"

magicnetworkmonitoringrule.MagicNetworkMonitoringRule_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/magicnetworkmonitoringrule"

magicnetworkmonitoringrule.MagicNetworkMonitoringRule_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/magicnetworkmonitoringrule"

magicnetworkmonitoringrule.MagicNetworkMonitoringRule_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a MagicNetworkMonitoringRule resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the MagicNetworkMonitoringRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing MagicNetworkMonitoringRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/magic_network_monitoring_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the MagicNetworkMonitoringRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.bandwidthThreshold">BandwidthThreshold</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.prefixMatch">PrefixMatch</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.zscoreSensitivity">ZscoreSensitivity</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.zscoreTarget">ZscoreTarget</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.accountIdInput">AccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.automaticAdvertisementInput">AutomaticAdvertisementInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.bandwidthInput">BandwidthInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.durationInput">DurationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.packetThresholdInput">PacketThresholdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.prefixesInput">PrefixesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.accountId">AccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.automaticAdvertisement">AutomaticAdvertisement</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.bandwidth">Bandwidth</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.duration">Duration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.packetThreshold">PacketThreshold</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.prefixes">Prefixes</a></code> | <code>*[]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `BandwidthThreshold`<sup>Required</sup> <a name="BandwidthThreshold" id="@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.bandwidthThreshold"></a>

```go
func BandwidthThreshold() *f64
```

- *Type:* *f64

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `PrefixMatch`<sup>Required</sup> <a name="PrefixMatch" id="@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.prefixMatch"></a>

```go
func PrefixMatch() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `ZscoreSensitivity`<sup>Required</sup> <a name="ZscoreSensitivity" id="@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.zscoreSensitivity"></a>

```go
func ZscoreSensitivity() *string
```

- *Type:* *string

---

##### `ZscoreTarget`<sup>Required</sup> <a name="ZscoreTarget" id="@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.zscoreTarget"></a>

```go
func ZscoreTarget() *string
```

- *Type:* *string

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.accountIdInput"></a>

```go
func AccountIdInput() *string
```

- *Type:* *string

---

##### `AutomaticAdvertisementInput`<sup>Optional</sup> <a name="AutomaticAdvertisementInput" id="@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.automaticAdvertisementInput"></a>

```go
func AutomaticAdvertisementInput() interface{}
```

- *Type:* interface{}

---

##### `BandwidthInput`<sup>Optional</sup> <a name="BandwidthInput" id="@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.bandwidthInput"></a>

```go
func BandwidthInput() *f64
```

- *Type:* *f64

---

##### `DurationInput`<sup>Optional</sup> <a name="DurationInput" id="@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.durationInput"></a>

```go
func DurationInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PacketThresholdInput`<sup>Optional</sup> <a name="PacketThresholdInput" id="@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.packetThresholdInput"></a>

```go
func PacketThresholdInput() *f64
```

- *Type:* *f64

---

##### `PrefixesInput`<sup>Optional</sup> <a name="PrefixesInput" id="@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.prefixesInput"></a>

```go
func PrefixesInput() *[]*string
```

- *Type:* *[]*string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.accountId"></a>

```go
func AccountId() *string
```

- *Type:* *string

---

##### `AutomaticAdvertisement`<sup>Required</sup> <a name="AutomaticAdvertisement" id="@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.automaticAdvertisement"></a>

```go
func AutomaticAdvertisement() interface{}
```

- *Type:* interface{}

---

##### `Bandwidth`<sup>Required</sup> <a name="Bandwidth" id="@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.bandwidth"></a>

```go
func Bandwidth() *f64
```

- *Type:* *f64

---

##### `Duration`<sup>Required</sup> <a name="Duration" id="@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.duration"></a>

```go
func Duration() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PacketThreshold`<sup>Required</sup> <a name="PacketThreshold" id="@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.packetThreshold"></a>

```go
func PacketThreshold() *f64
```

- *Type:* *f64

---

##### `Prefixes`<sup>Required</sup> <a name="Prefixes" id="@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.prefixes"></a>

```go
func Prefixes() *[]*string
```

- *Type:* *[]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### MagicNetworkMonitoringRuleConfig <a name="MagicNetworkMonitoringRuleConfig" id="@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRuleConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/magicnetworkmonitoringrule"

&magicnetworkmonitoringrule.MagicNetworkMonitoringRuleConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	AccountId: *string,
	Name: *string,
	AutomaticAdvertisement: interface{},
	Bandwidth: *f64,
	Duration: *string,
	PacketThreshold: *f64,
	Prefixes: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRuleConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRuleConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRuleConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRuleConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRuleConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRuleConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRuleConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRuleConfig.property.accountId">AccountId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/magic_network_monitoring_rule#account_id MagicNetworkMonitoringRule#account_id}. |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRuleConfig.property.name">Name</a></code> | <code>*string</code> | The name of the rule. |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRuleConfig.property.automaticAdvertisement">AutomaticAdvertisement</a></code> | <code>interface{}</code> | Toggle on if you would like Cloudflare to automatically advertise the IP Prefixes within the rule via Magic Transit when the rule is triggered. |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRuleConfig.property.bandwidth">Bandwidth</a></code> | <code>*f64</code> | The number of bits per second for the rule. |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRuleConfig.property.duration">Duration</a></code> | <code>*string</code> | The amount of time that the rule threshold must be exceeded to send an alert notification. |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRuleConfig.property.packetThreshold">PacketThreshold</a></code> | <code>*f64</code> | The number of packets per second for the rule. |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRuleConfig.property.prefixes">Prefixes</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/magic_network_monitoring_rule#prefixes MagicNetworkMonitoringRule#prefixes}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRuleConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRuleConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRuleConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRuleConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRuleConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRuleConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRuleConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRuleConfig.property.accountId"></a>

```go
AccountId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/magic_network_monitoring_rule#account_id MagicNetworkMonitoringRule#account_id}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRuleConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the rule.

Must be unique. Supports characters A-Z, a-z, 0-9, underscore (_), dash (-), period (.), and tilde (~). You can’t have a space in the rule name. Max 256 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/magic_network_monitoring_rule#name MagicNetworkMonitoringRule#name}

---

##### `AutomaticAdvertisement`<sup>Optional</sup> <a name="AutomaticAdvertisement" id="@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRuleConfig.property.automaticAdvertisement"></a>

```go
AutomaticAdvertisement interface{}
```

- *Type:* interface{}

Toggle on if you would like Cloudflare to automatically advertise the IP Prefixes within the rule via Magic Transit when the rule is triggered.

Only available for users of Magic Transit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/magic_network_monitoring_rule#automatic_advertisement MagicNetworkMonitoringRule#automatic_advertisement}

---

##### `Bandwidth`<sup>Optional</sup> <a name="Bandwidth" id="@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRuleConfig.property.bandwidth"></a>

```go
Bandwidth *f64
```

- *Type:* *f64

The number of bits per second for the rule.

When this value is exceeded for the set duration, an alert notification is sent. Minimum of 1 and no maximum.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/magic_network_monitoring_rule#bandwidth MagicNetworkMonitoringRule#bandwidth}

---

##### `Duration`<sup>Optional</sup> <a name="Duration" id="@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRuleConfig.property.duration"></a>

```go
Duration *string
```

- *Type:* *string

The amount of time that the rule threshold must be exceeded to send an alert notification.

The final value must be equivalent to one of the following 8 values ["1m","5m","10m","15m","20m","30m","45m","60m"].
Available values: "1m", "5m", "10m", "15m", "20m", "30m", "45m", "60m".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/magic_network_monitoring_rule#duration MagicNetworkMonitoringRule#duration}

---

##### `PacketThreshold`<sup>Optional</sup> <a name="PacketThreshold" id="@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRuleConfig.property.packetThreshold"></a>

```go
PacketThreshold *f64
```

- *Type:* *f64

The number of packets per second for the rule.

When this value is exceeded for the set duration, an alert notification is sent. Minimum of 1 and no maximum.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/magic_network_monitoring_rule#packet_threshold MagicNetworkMonitoringRule#packet_threshold}

---

##### `Prefixes`<sup>Optional</sup> <a name="Prefixes" id="@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRuleConfig.property.prefixes"></a>

```go
Prefixes *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/magic_network_monitoring_rule#prefixes MagicNetworkMonitoringRule#prefixes}.

---



