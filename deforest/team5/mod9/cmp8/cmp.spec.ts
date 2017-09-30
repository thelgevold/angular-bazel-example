
import { Cmp3598Component } from './cmp';
describe('Cmp3598Component', () => {
  it('should add', () => {
    expect(new Cmp3598Component().add3598(1)).toBe(3599);
  });
});