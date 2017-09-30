
import { Cmp3649Component } from './cmp';
describe('Cmp3649Component', () => {
  it('should add', () => {
    expect(new Cmp3649Component().add3649(1)).toBe(3650);
  });
});