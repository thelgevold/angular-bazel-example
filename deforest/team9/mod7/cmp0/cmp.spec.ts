
import { Cmp3970Component } from './cmp';
describe('Cmp3970Component', () => {
  it('should add', () => {
    expect(new Cmp3970Component().add3970(1)).toBe(3971);
  });
});