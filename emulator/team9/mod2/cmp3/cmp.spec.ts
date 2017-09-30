
import { Cmp4923Component } from './cmp';
describe('Cmp4923Component', () => {
  it('should add', () => {
    expect(new Cmp4923Component().add4923(1)).toBe(4924);
  });
});