
import { Cmp9519Component } from './cmp';
describe('Cmp9519Component', () => {
  it('should add', () => {
    expect(new Cmp9519Component().add9519(1)).toBe(9520);
  });
});