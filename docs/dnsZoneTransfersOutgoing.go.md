# `dnsZoneTransfersOutgoing` Submodule <a name="`dnsZoneTransfersOutgoing` Submodule" id="@cdktn/provider-cloudflare.dnsZoneTransfersOutgoing"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DnsZoneTransfersOutgoing <a name="DnsZoneTransfersOutgoing" id="@cdktn/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/dns_zone_transfers_outgoing cloudflare_dns_zone_transfers_outgoing}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/dnszonetransfersoutgoing"

dnszonetransfersoutgoing.NewDnsZoneTransfersOutgoing(scope Construct, id *string, config DnsZoneTransfersOutgoingConfig) DnsZoneTransfersOutgoing
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoingConfig">DnsZoneTransfersOutgoingConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoingConfig">DnsZoneTransfersOutgoingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DnsZoneTransfersOutgoing resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/dnszonetransfersoutgoing"

dnszonetransfersoutgoing.DnsZoneTransfersOutgoing_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/dnszonetransfersoutgoing"

dnszonetransfersoutgoing.DnsZoneTransfersOutgoing_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/dnszonetransfersoutgoing"

dnszonetransfersoutgoing.DnsZoneTransfersOutgoing_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/dnszonetransfersoutgoing"

dnszonetransfersoutgoing.DnsZoneTransfersOutgoing_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DnsZoneTransfersOutgoing resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DnsZoneTransfersOutgoing to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DnsZoneTransfersOutgoing that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/dns_zone_transfers_outgoing#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DnsZoneTransfersOutgoing to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.property.checkedTime">CheckedTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.property.createdTime">CreatedTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.property.lastTransferredTime">LastTransferredTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.property.soaSerial">SoaSerial</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.property.peersInput">PeersInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.property.zoneIdInput">ZoneIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.property.peers">Peers</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.property.zoneId">ZoneId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CheckedTime`<sup>Required</sup> <a name="CheckedTime" id="@cdktn/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.property.checkedTime"></a>

```go
func CheckedTime() *string
```

- *Type:* *string

---

##### `CreatedTime`<sup>Required</sup> <a name="CreatedTime" id="@cdktn/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.property.createdTime"></a>

```go
func CreatedTime() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LastTransferredTime`<sup>Required</sup> <a name="LastTransferredTime" id="@cdktn/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.property.lastTransferredTime"></a>

```go
func LastTransferredTime() *string
```

- *Type:* *string

---

##### `SoaSerial`<sup>Required</sup> <a name="SoaSerial" id="@cdktn/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.property.soaSerial"></a>

```go
func SoaSerial() *f64
```

- *Type:* *f64

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PeersInput`<sup>Optional</sup> <a name="PeersInput" id="@cdktn/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.property.peersInput"></a>

```go
func PeersInput() *[]*string
```

- *Type:* *[]*string

---

##### `ZoneIdInput`<sup>Optional</sup> <a name="ZoneIdInput" id="@cdktn/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.property.zoneIdInput"></a>

```go
func ZoneIdInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Peers`<sup>Required</sup> <a name="Peers" id="@cdktn/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.property.peers"></a>

```go
func Peers() *[]*string
```

- *Type:* *[]*string

---

##### `ZoneId`<sup>Required</sup> <a name="ZoneId" id="@cdktn/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.property.zoneId"></a>

```go
func ZoneId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoing.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DnsZoneTransfersOutgoingConfig <a name="DnsZoneTransfersOutgoingConfig" id="@cdktn/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoingConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-cloudflare-go/cloudflare/v14/dnszonetransfersoutgoing"

&dnszonetransfersoutgoing.DnsZoneTransfersOutgoingConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	Peers: *[]*string,
	ZoneId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoingConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoingConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoingConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoingConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoingConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoingConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoingConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoingConfig.property.name">Name</a></code> | <code>*string</code> | Zone name. |
| <code><a href="#@cdktn/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoingConfig.property.peers">Peers</a></code> | <code>*[]*string</code> | A list of peer tags. |
| <code><a href="#@cdktn/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoingConfig.property.zoneId">ZoneId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/dns_zone_transfers_outgoing#zone_id DnsZoneTransfersOutgoing#zone_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoingConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoingConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoingConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoingConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoingConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoingConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoingConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoingConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Zone name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/dns_zone_transfers_outgoing#name DnsZoneTransfersOutgoing#name}

---

##### `Peers`<sup>Required</sup> <a name="Peers" id="@cdktn/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoingConfig.property.peers"></a>

```go
Peers *[]*string
```

- *Type:* *[]*string

A list of peer tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/dns_zone_transfers_outgoing#peers DnsZoneTransfersOutgoing#peers}

---

##### `ZoneId`<sup>Required</sup> <a name="ZoneId" id="@cdktn/provider-cloudflare.dnsZoneTransfersOutgoing.DnsZoneTransfersOutgoingConfig.property.zoneId"></a>

```go
ZoneId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.17.0/docs/resources/dns_zone_transfers_outgoing#zone_id DnsZoneTransfersOutgoing#zone_id}.

---



