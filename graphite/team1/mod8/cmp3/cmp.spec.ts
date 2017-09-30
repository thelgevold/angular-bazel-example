
import { Cmp6183Component } from './cmp';
describe('Cmp6183Component', () => {
  it('should add', () => {
    expect(new Cmp6183Component().add6183(1)).toBe(6184);
  });
});