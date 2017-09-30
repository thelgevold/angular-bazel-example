
import { Cmp6519Component } from './cmp';
describe('Cmp6519Component', () => {
  it('should add', () => {
    expect(new Cmp6519Component().add6519(1)).toBe(6520);
  });
});