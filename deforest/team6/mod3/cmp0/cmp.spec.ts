
import { Cmp3630Component } from './cmp';
describe('Cmp3630Component', () => {
  it('should add', () => {
    expect(new Cmp3630Component().add3630(1)).toBe(3631);
  });
});