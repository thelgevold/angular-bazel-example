
import { Cmp4803Component } from './cmp';
describe('Cmp4803Component', () => {
  it('should add', () => {
    expect(new Cmp4803Component().add4803(1)).toBe(4804);
  });
});