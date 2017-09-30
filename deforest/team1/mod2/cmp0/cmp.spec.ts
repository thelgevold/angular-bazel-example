
import { Cmp3120Component } from './cmp';
describe('Cmp3120Component', () => {
  it('should add', () => {
    expect(new Cmp3120Component().add3120(1)).toBe(3121);
  });
});