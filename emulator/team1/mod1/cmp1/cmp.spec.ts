
import { Cmp4111Component } from './cmp';
describe('Cmp4111Component', () => {
  it('should add', () => {
    expect(new Cmp4111Component().add4111(1)).toBe(4112);
  });
});