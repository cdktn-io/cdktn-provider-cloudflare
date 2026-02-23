# `webAnalyticsSite` Submodule <a name="`webAnalyticsSite` Submodule" id="@cdktn/provider-cloudflare.webAnalyticsSite"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WebAnalyticsSite <a name="WebAnalyticsSite" id="@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/web_analytics_site cloudflare_web_analytics_site}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/webanalyticssite"

webanalyticssite.NewWebAnalyticsSite(scope Construct, id *string, config WebAnalyticsSiteConfig) WebAnalyticsSite
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteConfig">WebAnalyticsSiteConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteConfig">WebAnalyticsSiteConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.resetAutoInstall">ResetAutoInstall</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.resetHost">ResetHost</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.resetLite">ResetLite</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.resetZoneTag">ResetZoneTag</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetAutoInstall` <a name="ResetAutoInstall" id="@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.resetAutoInstall"></a>

```go
func ResetAutoInstall()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.resetEnabled"></a>

```go
func ResetEnabled()
```

##### `ResetHost` <a name="ResetHost" id="@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.resetHost"></a>

```go
func ResetHost()
```

##### `ResetLite` <a name="ResetLite" id="@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.resetLite"></a>

```go
func ResetLite()
```

##### `ResetZoneTag` <a name="ResetZoneTag" id="@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.resetZoneTag"></a>

```go
func ResetZoneTag()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a WebAnalyticsSite resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/webanalyticssite"

webanalyticssite.WebAnalyticsSite_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/webanalyticssite"

webanalyticssite.WebAnalyticsSite_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/webanalyticssite"

webanalyticssite.WebAnalyticsSite_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/webanalyticssite"

webanalyticssite.WebAnalyticsSite_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a WebAnalyticsSite resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the WebAnalyticsSite to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing WebAnalyticsSite that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/web_analytics_site#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the WebAnalyticsSite to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.property.created">Created</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.property.rules">Rules</a></code> | <code><a href="#@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesList">WebAnalyticsSiteRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.property.ruleset">Ruleset</a></code> | <code><a href="#@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesetOutputReference">WebAnalyticsSiteRulesetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.property.siteTag">SiteTag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.property.siteToken">SiteToken</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.property.snippet">Snippet</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.property.accountIdInput">AccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.property.autoInstallInput">AutoInstallInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.property.hostInput">HostInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.property.liteInput">LiteInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.property.zoneTagInput">ZoneTagInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.property.accountId">AccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.property.autoInstall">AutoInstall</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.property.host">Host</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.property.lite">Lite</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.property.zoneTag">ZoneTag</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Created`<sup>Required</sup> <a name="Created" id="@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.property.created"></a>

```go
func Created() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Rules`<sup>Required</sup> <a name="Rules" id="@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.property.rules"></a>

```go
func Rules() WebAnalyticsSiteRulesList
```

- *Type:* <a href="#@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesList">WebAnalyticsSiteRulesList</a>

---

##### `Ruleset`<sup>Required</sup> <a name="Ruleset" id="@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.property.ruleset"></a>

```go
func Ruleset() WebAnalyticsSiteRulesetOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesetOutputReference">WebAnalyticsSiteRulesetOutputReference</a>

---

##### `SiteTag`<sup>Required</sup> <a name="SiteTag" id="@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.property.siteTag"></a>

```go
func SiteTag() *string
```

- *Type:* *string

---

##### `SiteToken`<sup>Required</sup> <a name="SiteToken" id="@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.property.siteToken"></a>

```go
func SiteToken() *string
```

- *Type:* *string

---

##### `Snippet`<sup>Required</sup> <a name="Snippet" id="@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.property.snippet"></a>

```go
func Snippet() *string
```

- *Type:* *string

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.property.accountIdInput"></a>

```go
func AccountIdInput() *string
```

- *Type:* *string

---

##### `AutoInstallInput`<sup>Optional</sup> <a name="AutoInstallInput" id="@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.property.autoInstallInput"></a>

```go
func AutoInstallInput() interface{}
```

- *Type:* interface{}

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `HostInput`<sup>Optional</sup> <a name="HostInput" id="@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.property.hostInput"></a>

```go
func HostInput() *string
```

- *Type:* *string

---

##### `LiteInput`<sup>Optional</sup> <a name="LiteInput" id="@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.property.liteInput"></a>

```go
func LiteInput() interface{}
```

- *Type:* interface{}

---

##### `ZoneTagInput`<sup>Optional</sup> <a name="ZoneTagInput" id="@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.property.zoneTagInput"></a>

```go
func ZoneTagInput() *string
```

- *Type:* *string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.property.accountId"></a>

```go
func AccountId() *string
```

- *Type:* *string

---

##### `AutoInstall`<sup>Required</sup> <a name="AutoInstall" id="@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.property.autoInstall"></a>

```go
func AutoInstall() interface{}
```

- *Type:* interface{}

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.property.host"></a>

```go
func Host() *string
```

- *Type:* *string

---

##### `Lite`<sup>Required</sup> <a name="Lite" id="@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.property.lite"></a>

```go
func Lite() interface{}
```

- *Type:* interface{}

---

##### `ZoneTag`<sup>Required</sup> <a name="ZoneTag" id="@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.property.zoneTag"></a>

```go
func ZoneTag() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSite.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### WebAnalyticsSiteConfig <a name="WebAnalyticsSiteConfig" id="@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/webanalyticssite"

&webanalyticssite.WebAnalyticsSiteConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	AccountId: *string,
	AutoInstall: interface{},
	Enabled: interface{},
	Host: *string,
	Lite: interface{},
	ZoneTag: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteConfig.property.accountId">AccountId</a></code> | <code>*string</code> | Identifier. |
| <code><a href="#@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteConfig.property.autoInstall">AutoInstall</a></code> | <code>interface{}</code> | If enabled, the JavaScript snippet is automatically injected for orange-clouded sites. |
| <code><a href="#@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteConfig.property.enabled">Enabled</a></code> | <code>interface{}</code> | Enables or disables RUM. This option can be used only when auto_install is set to true. |
| <code><a href="#@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteConfig.property.host">Host</a></code> | <code>*string</code> | The hostname to use for gray-clouded sites. |
| <code><a href="#@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteConfig.property.lite">Lite</a></code> | <code>interface{}</code> | If enabled, the JavaScript snippet will not be injected for visitors from the EU. |
| <code><a href="#@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteConfig.property.zoneTag">ZoneTag</a></code> | <code>*string</code> | The zone identifier. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteConfig.property.accountId"></a>

```go
AccountId *string
```

- *Type:* *string

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/web_analytics_site#account_id WebAnalyticsSite#account_id}

---

##### `AutoInstall`<sup>Optional</sup> <a name="AutoInstall" id="@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteConfig.property.autoInstall"></a>

```go
AutoInstall interface{}
```

- *Type:* interface{}

If enabled, the JavaScript snippet is automatically injected for orange-clouded sites.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/web_analytics_site#auto_install WebAnalyticsSite#auto_install}

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteConfig.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Enables or disables RUM. This option can be used only when auto_install is set to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/web_analytics_site#enabled WebAnalyticsSite#enabled}

---

##### `Host`<sup>Optional</sup> <a name="Host" id="@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteConfig.property.host"></a>

```go
Host *string
```

- *Type:* *string

The hostname to use for gray-clouded sites.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/web_analytics_site#host WebAnalyticsSite#host}

---

##### `Lite`<sup>Optional</sup> <a name="Lite" id="@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteConfig.property.lite"></a>

```go
Lite interface{}
```

- *Type:* interface{}

If enabled, the JavaScript snippet will not be injected for visitors from the EU.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/web_analytics_site#lite WebAnalyticsSite#lite}

---

##### `ZoneTag`<sup>Optional</sup> <a name="ZoneTag" id="@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteConfig.property.zoneTag"></a>

```go
ZoneTag *string
```

- *Type:* *string

The zone identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/web_analytics_site#zone_tag WebAnalyticsSite#zone_tag}

---

### WebAnalyticsSiteRules <a name="WebAnalyticsSiteRules" id="@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRules.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/webanalyticssite"

&webanalyticssite.WebAnalyticsSiteRules {

}
```


### WebAnalyticsSiteRuleset <a name="WebAnalyticsSiteRuleset" id="@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRuleset"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRuleset.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/webanalyticssite"

&webanalyticssite.WebAnalyticsSiteRuleset {

}
```


## Classes <a name="Classes" id="Classes"></a>

### WebAnalyticsSiteRulesetOutputReference <a name="WebAnalyticsSiteRulesetOutputReference" id="@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesetOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/webanalyticssite"

webanalyticssite.NewWebAnalyticsSiteRulesetOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) WebAnalyticsSiteRulesetOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesetOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesetOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesetOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesetOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesetOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesetOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesetOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesetOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesetOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesetOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesetOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesetOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesetOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesetOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesetOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesetOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesetOutputReference.property.enabled">Enabled</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesetOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesetOutputReference.property.zoneName">ZoneName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesetOutputReference.property.zoneTag">ZoneTag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesetOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRuleset">WebAnalyticsSiteRuleset</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesetOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesetOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesetOutputReference.property.enabled"></a>

```go
func Enabled() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesetOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ZoneName`<sup>Required</sup> <a name="ZoneName" id="@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesetOutputReference.property.zoneName"></a>

```go
func ZoneName() *string
```

- *Type:* *string

---

##### `ZoneTag`<sup>Required</sup> <a name="ZoneTag" id="@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesetOutputReference.property.zoneTag"></a>

```go
func ZoneTag() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesetOutputReference.property.internalValue"></a>

```go
func InternalValue() WebAnalyticsSiteRuleset
```

- *Type:* <a href="#@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRuleset">WebAnalyticsSiteRuleset</a>

---


### WebAnalyticsSiteRulesList <a name="WebAnalyticsSiteRulesList" id="@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/webanalyticssite"

webanalyticssite.NewWebAnalyticsSiteRulesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) WebAnalyticsSiteRulesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesList.get"></a>

```go
func Get(index *f64) WebAnalyticsSiteRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### WebAnalyticsSiteRulesOutputReference <a name="WebAnalyticsSiteRulesOutputReference" id="@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/webanalyticssite"

webanalyticssite.NewWebAnalyticsSiteRulesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) WebAnalyticsSiteRulesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesOutputReference.property.created">Created</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesOutputReference.property.host">Host</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesOutputReference.property.inclusive">Inclusive</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesOutputReference.property.isPaused">IsPaused</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesOutputReference.property.paths">Paths</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesOutputReference.property.priority">Priority</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRules">WebAnalyticsSiteRules</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Created`<sup>Required</sup> <a name="Created" id="@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesOutputReference.property.created"></a>

```go
func Created() *string
```

- *Type:* *string

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesOutputReference.property.host"></a>

```go
func Host() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Inclusive`<sup>Required</sup> <a name="Inclusive" id="@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesOutputReference.property.inclusive"></a>

```go
func Inclusive() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `IsPaused`<sup>Required</sup> <a name="IsPaused" id="@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesOutputReference.property.isPaused"></a>

```go
func IsPaused() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `Paths`<sup>Required</sup> <a name="Paths" id="@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesOutputReference.property.paths"></a>

```go
func Paths() *[]*string
```

- *Type:* *[]*string

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesOutputReference.property.priority"></a>

```go
func Priority() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRulesOutputReference.property.internalValue"></a>

```go
func InternalValue() WebAnalyticsSiteRules
```

- *Type:* <a href="#@cdktn/provider-cloudflare.webAnalyticsSite.WebAnalyticsSiteRules">WebAnalyticsSiteRules</a>

---



