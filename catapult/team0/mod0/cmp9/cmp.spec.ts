
import { Cmp2009Component } from './cmp';
describe('Cmp2009Component', () => {
  it('should add', () => {
    expect(new Cmp2009Component().add2009(1)).toBe(2010);
  });
});