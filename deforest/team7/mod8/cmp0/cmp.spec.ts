
import { Cmp3780Component } from './cmp';
describe('Cmp3780Component', () => {
  it('should add', () => {
    expect(new Cmp3780Component().add3780(1)).toBe(3781);
  });
});