
import { Cmp3013Component } from './cmp';
describe('Cmp3013Component', () => {
  it('should add', () => {
    expect(new Cmp3013Component().add3013(1)).toBe(3014);
  });
});