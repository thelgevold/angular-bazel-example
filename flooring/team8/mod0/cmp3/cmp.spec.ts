
import { Cmp5803Component } from './cmp';
describe('Cmp5803Component', () => {
  it('should add', () => {
    expect(new Cmp5803Component().add5803(1)).toBe(5804);
  });
});