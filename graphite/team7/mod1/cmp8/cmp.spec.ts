
import { Cmp6718Component } from './cmp';
describe('Cmp6718Component', () => {
  it('should add', () => {
    expect(new Cmp6718Component().add6718(1)).toBe(6719);
  });
});