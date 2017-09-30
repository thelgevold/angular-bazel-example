
import { Cmp4323Component } from './cmp';
describe('Cmp4323Component', () => {
  it('should add', () => {
    expect(new Cmp4323Component().add4323(1)).toBe(4324);
  });
});