
import { Cmp7653Component } from './cmp';
describe('Cmp7653Component', () => {
  it('should add', () => {
    expect(new Cmp7653Component().add7653(1)).toBe(7654);
  });
});