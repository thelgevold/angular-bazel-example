
import { Cmp4623Component } from './cmp';
describe('Cmp4623Component', () => {
  it('should add', () => {
    expect(new Cmp4623Component().add4623(1)).toBe(4624);
  });
});