package uvsoftgroup.geospatialrestapiapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import uvsoftgroup.geospatialrestapiapp.model.GeometryGisInfo;

public interface GeometryGisInfoRepository extends JpaRepository<GeometryGisInfo, Long>  {

}
