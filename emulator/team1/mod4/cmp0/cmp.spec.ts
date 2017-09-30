
import { Cmp4140Component } from './cmp';
describe('Cmp4140Component', () => {
  it('should add', () => {
    expect(new Cmp4140Component().add4140(1)).toBe(4141);
  });
});