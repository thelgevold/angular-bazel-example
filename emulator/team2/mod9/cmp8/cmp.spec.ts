
import { Cmp4298Component } from './cmp';
describe('Cmp4298Component', () => {
  it('should add', () => {
    expect(new Cmp4298Component().add4298(1)).toBe(4299);
  });
});