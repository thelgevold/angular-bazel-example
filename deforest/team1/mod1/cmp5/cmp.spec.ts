
import { Cmp3115Component } from './cmp';
describe('Cmp3115Component', () => {
  it('should add', () => {
    expect(new Cmp3115Component().add3115(1)).toBe(3116);
  });
});