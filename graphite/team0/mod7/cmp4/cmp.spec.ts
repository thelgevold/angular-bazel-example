
import { Cmp6074Component } from './cmp';
describe('Cmp6074Component', () => {
  it('should add', () => {
    expect(new Cmp6074Component().add6074(1)).toBe(6075);
  });
});