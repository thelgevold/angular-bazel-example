
import { Cmp8908Component } from './cmp';
describe('Cmp8908Component', () => {
  it('should add', () => {
    expect(new Cmp8908Component().add8908(1)).toBe(8909);
  });
});