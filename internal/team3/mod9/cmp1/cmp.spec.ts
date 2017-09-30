
import { Cmp8391Component } from './cmp';
describe('Cmp8391Component', () => {
  it('should add', () => {
    expect(new Cmp8391Component().add8391(1)).toBe(8392);
  });
});