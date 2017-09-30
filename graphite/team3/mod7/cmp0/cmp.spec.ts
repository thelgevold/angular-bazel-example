
import { Cmp6370Component } from './cmp';
describe('Cmp6370Component', () => {
  it('should add', () => {
    expect(new Cmp6370Component().add6370(1)).toBe(6371);
  });
});