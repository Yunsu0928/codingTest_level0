function solution(angle) {
    if (angle === 180) return 4
    if (angle === 90) return 2
    if (angle < 90 && angle > 0) return 1
    if (angle > 90 && angle < 180) return 3
}