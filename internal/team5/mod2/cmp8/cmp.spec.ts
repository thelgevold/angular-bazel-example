
import { Cmp8528Component } from './cmp';
describe('Cmp8528Component', () => {
  it('should add', () => {
    expect(new Cmp8528Component().add8528(1)).toBe(8529);
  });
});