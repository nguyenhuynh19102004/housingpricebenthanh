var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_bk500m_1 = new ol.format.GeoJSON();
var features_bk500m_1 = format_bk500m_1.readFeatures(json_bk500m_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_bk500m_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_bk500m_1.addFeatures(features_bk500m_1);
var lyr_bk500m_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_bk500m_1, 
                style: style_bk500m_1,
                popuplayertitle: 'bk500m',
                interactive: true,
                title: '<img src="styles/legend/bk500m_1.png" /> bk500m'
            });
var format_245LTTrngPhngBnThnhQun1_2 = new ol.format.GeoJSON();
var features_245LTTrngPhngBnThnhQun1_2 = format_245LTTrngPhngBnThnhQun1_2.readFeatures(json_245LTTrngPhngBnThnhQun1_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_245LTTrngPhngBnThnhQun1_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_245LTTrngPhngBnThnhQun1_2.addFeatures(features_245LTTrngPhngBnThnhQun1_2);
var lyr_245LTTrngPhngBnThnhQun1_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_245LTTrngPhngBnThnhQun1_2, 
                style: style_245LTTrngPhngBnThnhQun1_2,
                popuplayertitle: '245, Lý Tự Trọng,Phường Bến Thành, Quận 1',
                interactive: true,
                title: '<img src="styles/legend/245LTTrngPhngBnThnhQun1_2.png" /> 245, Lý Tự Trọng,Phường Bến Thành, Quận 1'
            });

lyr_GoogleMaps_0.setVisible(true);lyr_bk500m_1.setVisible(true);lyr_245LTTrngPhngBnThnhQun1_2.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_bk500m_1,lyr_245LTTrngPhngBnThnhQun1_2];
lyr_bk500m_1.set('fieldAliases', {'fid': 'fid', 'osm_id': 'osm_id', 'class': 'class', 'type': 'type', 'name': 'name', 'address': 'address', 'extratags': 'extratags', });
lyr_245LTTrngPhngBnThnhQun1_2.set('fieldAliases', {'osm_id': 'osm_id', 'class': 'class', 'type': 'type', 'name': 'name', 'address': 'address', 'extratags': 'extratags', });
lyr_bk500m_1.set('fieldImages', {'fid': '', 'osm_id': '', 'class': '', 'type': '', 'name': '', 'address': '', 'extratags': '', });
lyr_245LTTrngPhngBnThnhQun1_2.set('fieldImages', {'osm_id': '', 'class': '', 'type': '', 'name': '', 'address': '', 'extratags': '', });
lyr_bk500m_1.set('fieldLabels', {'fid': 'no label', 'osm_id': 'no label', 'class': 'no label', 'type': 'no label', 'name': 'no label', 'address': 'no label', 'extratags': 'no label', });
lyr_245LTTrngPhngBnThnhQun1_2.set('fieldLabels', {'osm_id': 'no label', 'class': 'no label', 'type': 'no label', 'name': 'no label', 'address': 'no label', 'extratags': 'no label', });
lyr_245LTTrngPhngBnThnhQun1_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});