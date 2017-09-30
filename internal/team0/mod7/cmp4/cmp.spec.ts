
import { Cmp8074Component } from './cmp';
describe('Cmp8074Component', () => {
  it('should add', () => {
    expect(new Cmp8074Component().add8074(1)).toBe(8075);
  });
});